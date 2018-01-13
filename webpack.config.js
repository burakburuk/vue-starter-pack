const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    }
};