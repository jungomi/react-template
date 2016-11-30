const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const devConfig = merge(baseConfig, {
  devtool: 'source-map',
  devServer: {
    contentBase: baseConfig.output.publicPath
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: true
        }
      }, {
        loader: 'postcss-loader'
      }]
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './src/main.css', to: 'style.css' }])
  ]
});

module.exports = devConfig;
