var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
process.env.NODE_ENV='production'
new WebpackDevServer(webpack(config), {
  publicPath: '/dist/',
  hot: true,
  historyApiFallback: true
}).listen(3200, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3200');
});
