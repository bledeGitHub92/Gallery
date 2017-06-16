var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');
const { PORT } = require('./config');

new WebpackDevServer(webpack(config), {
    publicPath: '/',
    contentBase: path.resolve(__dirname, '../client/gallery'),
    hot: true,
    noInfo: false,
    historyApiFallback: {
        rewrites: [
            { from: '^\/$', to: '/gallery.html' },
            { from: '^\/waterfall\/belle', to: '/gallery.html' },
        ]
    },
    proxy: {
        '/brief': {
            target: 'http://localhost:9000/brief'
        },
        '/paths': {
            target: 'http://localhost:9000/paths'
        },
        '/belle': {
            target: 'http://localhost:9000/belle'
        }
    }
}).listen(PORT, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:5000');
});