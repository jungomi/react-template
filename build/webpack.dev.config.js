const baseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');

const devConfig = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.output.publicPath
  }
});

module.exports = devConfig;
