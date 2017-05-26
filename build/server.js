var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');
const { PORT } = require('./config');

new WebpackDevServer(webpack(config), {
    publicPath: '/',
    hot: true,
    noInfo: false,
    historyApiFallback: {
        rewrites: [
            { from: '^\/$', to: '/gallery.html' }
        ]
    }
}).listen(PORT, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:5000');
});