var path = require('path');
var webpack = require('webpack');
var Merge = require('webpack-merge');
var commonConfig = require('./webpack.common');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const { PORT } = require('./config');

module.exports = Merge(commonConfig, {
    entry: {
        gallery: [
            `webpack-dev-server/client?http://localhost:${PORT}`,
            'webpack/hot/only-dev-server',
            './client/gallery/gallery.jsx'
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'assets/scripts/[name].js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 生成稳定的模块 ID
        new ExtractTextPlugin('assets/styles/[name].css'),
        // react 热替换
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
})