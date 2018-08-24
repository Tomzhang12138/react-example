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
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: ''
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            attrs: {
                                first: 1
                            },
                            singleton: true,
                            insertAt: 'top'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            root: '/',
                            url: true,
                            alias: {},
                            import: true,
                            modules: false,
                            minimize: false,
                            sourceMap: false,
                            camelCase: false,
                            importLoaders: 0,
                            localIdentName: '[hash:base64]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.pcss']
    }
}
module.exports = config;