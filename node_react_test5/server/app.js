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

}
module.exports = new App().app;
