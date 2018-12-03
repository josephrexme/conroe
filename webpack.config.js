require('dotenv').config();
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

const entries = ['./src/index.js'];

if(process.env.NODE_ENV === 'development') {
  entries.push('webpack-hot-middleware/client?path=http://localhost:7700/__webpack_hmr&timeout=4000');
}

const prodPlugins = process.env.NODE_ENV === 'development' ? [] : [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new UglifyJsPlugin({ sourceMap: true }),
];
const config = {
  mode: process.env.NODE_ENV,

  entry: entries,

  output: {
    filename: 'bundle.js',
    path: path.resolve('./public'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize=true',
        }),
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'react-svg-loader',
            options: { jsx: true }
          }
        ],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                optimizationLevel: 7
              }
            }
          }]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Nollywood Database',
      inject: false,
      template: HtmlWebpackTemplate,
      hash: true,
      mobile: true,
      favicon: 'public/favicon.ico',
      headHtmlSnippet: '<base href="/" /><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Open+Sans+Condensed:700" rel="stylesheet">',
      appMountId: 'app',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'HOST']),
  ].concat(prodPlugins)
};

module.exports = config;
