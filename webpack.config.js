const {
  addPlugins,
  createConfig,
  entryPoint,
  env,
  setOutput,
  sourceMaps,
  webpack
} = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devServer = require('@webpack-blocks/dev-server2');
const extractText = require('@webpack-blocks/extract-text2');

module.exports = createConfig([
  setOutput('./dist/bundle.js'),
  babel(),
  env('development', [
    entryPoint('./src/main.dev.js'),
    sourceMaps(),
    devServer(),
    devServer.reactHot()
  ]),
  env('production', [
    entryPoint('./src/main.js'),
    extractText('style.css'),
    addPlugins([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new CopyWebpackPlugin([{ from: './index.html' }]),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        sourceMap: false
      }),
    ])
  ])
]);
