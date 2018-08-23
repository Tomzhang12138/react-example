const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const webpackFile = require('./webpack.file.conf');

let config = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8087,
        hot: true,
        inline: true,
        contentBase: './devBuild',
        historyApiFallback: true,
        disableHostCheck: true
    }
});

module.exports = config;
