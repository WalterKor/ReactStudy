const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');



class App{
    constructor(){
        this.app = express();

        // 라우팅 controller
        this.getRouting();

        //정적 디렉토리 추가
        this.setStatic();

    }


    setStatic(){
        this.app.use('/static', express.static('static'));
    }

    getRouting(){
        this.app.use(require('./controller'))
    }

}
module.exports = new App().app;
