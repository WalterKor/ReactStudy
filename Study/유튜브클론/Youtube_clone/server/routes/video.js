const express = require('express');
const router = express.Router();
const multer = require('multer'); //파일을 저장하기위한 디팬던시

const { auth } = require("../middleware/auth");
const {Video} = require('../models/Video');
var ffmpeg = require("fluent-ffmpeg");

var storage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename:  (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file");

// var upload = multer({ dest: 'uploads/' });
// var uploadWithOriginalFilename  = multer({ storage: storage });

//=================================
//             Video
//=================================

router.post('/uploadfiles', (req, res) => {    
    console.log('server 통신')
    upload(req, res, err => {
        if(err){
            return res.json({ success: false, err})        
        }
        return res.json({
            success: true,
            url:res.req.file.path,
            fileName: res.req.file.filename
        })
    });
});

router.post('/thumbnail', (req, res) => {    
    
    let filePath = "";
    let fileDuration = "";

    //비디오정보 가져오기
    ffmpeg.ffprobe(req.body.url, function (err, metadata) {
        console.dir(metadata);
        console.log(metadata.format.duration);
        fileDuration = metadata.format.duration;    
    });

    //썸네일 생성
    ffmpeg(req.body.url)
    .on('filenames', function (filenames) {
        console.log('Will generate' + filenames.join(', '))
        console.log(filenames);    
        filePath = "uploads/thumbnails/" + filenames[0]        
    })
    .on('end', function () {
        console.log('Screenshots taken');
        return res.json({
            success : true, 
            url: filePath,            
            fileDuration : fileDuration
        })
    })
    .on('error', function (err) {
        console.log(err);
        return res.json({
            success : false,
            err
        })        
    })
    .screenshots({
        count: 3,
        folder : 'uploads/thumbnails',
        size : '320x240',
        filename: 'thumbnail-%b.png'
    })

});

//비디오를 저장한다.
router.post('/uploadVideo', (req, res)=>{
    //Variable 모든게 담겨있다. 
    const video = new Video(req.body);
    video.save((err, doc)=>{
        if(err) return res.json({success: false, err})
        res.status(200).json({success: true, videos})
    });
});

router.get('/getVideos', (req, res)=>{
    //비디오를 DB에서 가져와서 클라이언트에 보낸다.
    Video.find()
        .populate('writer') /*witer의 모든 정보를 가져온다.*/
        .exec((err, videos)=>{
            if(err) return res.status(400).send(err);
            res.status(200).json({success:true, videos})
        });
});

module.exports = router;
