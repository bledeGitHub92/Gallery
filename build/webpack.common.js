var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var WebpackChunkHash = require('webpack-chunk-hash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const { PORT } = require('./config');

module.exports = {
    entry: {
        gallery: [
            `webpack-dev-server/client?http://localhost:${PORT}`,
            'webpack/hot/only-dev-server',
            './client/gallery/gallery.jsx'
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, '../client')],
                use: [
                    { loader: 'react-hot-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-3', 'react'],
                            plugins: ['transform-object-rest-spread', 'transform-runtime']
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'] })
                                ]
                            }
                        },
                    ]
                }),
            },
            {
                test: /\.(png|jpg|gif|otf|eot|svg|ttf|woff|woff2)([?]?.*)$/,
                include: [path.resolve(__dirname, '../client')],
                use: ['url-loader?limit=8192&name=assets/images/[name].[hash:8].[ext]'],
            },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            'styles': path.resolve(__dirname, '../client/gallery/assets/styles/')
        }
    },
    plugins: [
        new HtmlPlugin({
            filename: 'gallery.html',
            template: path.resolve(__dirname, '../client/gallery/gallery.html'),
            chunks: ['gallery', 'manifest']
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['manifest'],
            minChunks: Infinity
        }),
        new WebpackChunkHash(), // 基于文件的内容生成文件哈希
        new ChunkManifestPlugin({
            filename: "chunk-manifest.json",
            manifestVariable: "webpackManifest"
        }) // 稳定 manifest 哈希
    ],
};