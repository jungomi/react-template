const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const extractCss = new ExtractTextPlugin({
  disable: !isProd,
  filename: 'styles.css'
});

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
      },
      {
        test: /\.css$/,
        loader: extractCss.extract({
          disable: !isProd,
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
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
  stats: {
    colors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractCss
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
    }
  });
}

function prodConfig(config) {
  return merge(config, {
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
      })
    ]
  });
}

module.exports = isProd ? prodConfig(baseConfig) : devConfig(baseConfig);
