var webpack = require('webpack');
var Merge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Merge(commonConfig, {
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        sourceMapFilename: '[name].map'
    },
    plugins: [
        new ExtractTextPlugin('assets/styles/[name].[contenthash:8].css'),
        new webpack.HashedModuleIdsPlugin(), // 生成稳定的模块 ID
        new webpack.optimize.UglifyJsPlugin({
            compress: process.env.NODE_ENV === 'production'
        })
    ]
})