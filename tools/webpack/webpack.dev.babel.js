/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
