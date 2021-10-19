const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:'development',
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', 'js']
    },
    entry:{
        app: './client',
    },

    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options:{
                presets: ['@bable/preset-env', '@babel/preset-react'],
                Plugins: [],
            }
        }]
    },

    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
}