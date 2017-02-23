const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

function devConfig(config) {
  return merge(config, {
    entry: [
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/index.dev.js')
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: config.output.publicPath
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }
      ]
    }
  });
}

function prodConfig(config) {
  return merge(config, {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: true
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
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
      new ExtractTextPlugin('style.css')
    ]
  });
}

module.exports = isProd ? prodConfig(baseConfig) : devConfig(baseConfig);
