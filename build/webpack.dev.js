var path = require('path');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Merge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'assets/scripts/[name].js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 生成稳定的模块 ID
        new ExtractTextPlugin('assets/styles/[name].css'),
        // react 热替换
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
})