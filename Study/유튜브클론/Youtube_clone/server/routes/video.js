const express = require('express');
const router = express.Router();
const multer = require('multer'); //파일을 저장하기위한 디팬던시

const { auth } = require("../middleware/auth");
// const {Video} = require('../models/Video');
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
    //썸네일 생성 비디오 러닝타임 가져오기
    //비디오정보 가져오기
    ffmpeg.ffprobe(req.body.url, function (err, metadata) {
        console.dir(metadata);
        console.log(metadata.format.duration);
        fileDuration = metadata.format.duration;    
    });

    //썸네일 생성
    ffmpeg(req.body.url)
    .on('filenames', function (params) {
        
    })

});

module.exports = router;
