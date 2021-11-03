const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/key');


class App{
    constructor(){

        this.app = express();

        this.getRouting();

        this.setMiddleWare();

        this.settingDB();


    }

    getRouting(){
        this.app.use(require('./controller'));
    }

    setMiddleWare(){
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
    }

    settingDB(){
        mongoose.connect(config.mongoURI, {
            useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('MongoDB Connected...'))
            .catch(err => console.log(err))          
    }


}

module.exports = new App().app