let path = require('path')
const webpack = require('webpack');
const opn = require('opn');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackFile = require('./webpack.file.conf');
let config = {
    entry: {
        'index': path.resolve(__dirname, '../../entryBuild/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../../devBuild'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                include: [
                    path.resolve(__dirname, '../../app'),
                    path.resolve(__dirname, '../../entryBuild')
                ],
                exclude: [
                    path.resolve(__dirname, '../../node_modules')
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.pcss']
    }
}
module.exports = config;