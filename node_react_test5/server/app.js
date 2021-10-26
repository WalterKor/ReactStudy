const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/key')


class App{
    constructor(){
        this.app = express();

        // 라우팅 controller
        this.getRouting();

        //정적 디렉토리 추가
        this.setStatic();
        
        this.settingDB();

        this.setMiddleWare();


        /*error handling*/
        // this.status404();
        
        // this.status500();

    }


    setStatic(){
        this.app.use('/static', express.static('static'));
    }

    getRouting(){
        this.app.use(require('./controller'))
    }

    settingDB(){
        mongoose.connect(config.mongoURI, {
            useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('MongoDB Connected...'))
            .catch(err => console.log(err))          
    }

    setMiddleWare(){
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }
    
    status404() {        
        this.app.use((req , res, _ ) => {
            res.status(404).render('/static/404.html')
        });
    }
    
    status500() {
        this.app.use( (err, req, res,  _ ) => {
            res.status(500).render('/static/500.html')
        });
    
    }

}
module.exports = new App().app;
