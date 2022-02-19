const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');
const cookieParser = require('cookie-parser');




const app = express();
const port = 5000;

const config = require('./config/key');

//form tag 안에 분석
app.use(bodyParser.urlencoded({extended: true}));
//json 안에 분석
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Conneted')).catch(err=> console.log(err));


app.get('/', (req, res)=>{
    res.send('hello world');
})

app.post('/api/users/join' ,(req, res)=>{

    const user= new User(req.body);
    //save가 mongoDB에 저장을 해주네
    user.save((err, doc)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    });
})

app.post('/api/users/login', (req, res)=>{
    User.findOne({email :req.body.email}, (err, DBuser)=>{
        
        if(!DBuser){            
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });
        }

        DBuser.comparePassword( req.body.password , (err, isMatch)=>{

            if(!isMatch){ return res.json({ loginSuccess: false, message: "Wrong password" })}

            DBuser.generateToken((err, user)=>{
                if(err) return res.status(400).send(err);

                //토큰을 저장한다. 쿠키, 로컬스토리지
                res
                    .cookie("user_token", user.token)
                    .status(200)
                    .json({loginSuccess:true , UserId: user._id})
            });
        })
    })

});

app.get('/api/users/auth', auth , (req, res)=>{
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth , (req, res)=>{
    User.findOneAndUpdate({_id: req.user._id}, { token: ""}, (err, user)=>{
        if(err) return res.json({ success: false, err});

        return res.status(200).send({
            success: true
        })
    })
})

app.get('/api/hello', (req, res)=>{
    res.send("안녕하세요dd")
});



app.listen(port, ()=>{
    console.log(`Express server started on ${port}`);
})

