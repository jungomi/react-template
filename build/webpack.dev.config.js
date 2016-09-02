var baseConfig = require('./webpack.base.config.js');
var merge = require('webpack-merge');

var devConfig = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.output.publicPath
  }
});

module.exports = devConfig;
