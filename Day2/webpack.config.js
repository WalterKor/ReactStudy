const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 production
    devtool: 'eval', //빠르게 설정하겠다.
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry:{
        //입력
        app:['./client'],
    },
    output:{
        //출력
        path: path.join(__dirname, 'dist'), //dist folder path
        filename: 'app.js'
    }
}