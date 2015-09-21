var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  watch: true,
  entry: {
    'index.ios': ['./index.ios.js'],
    'index.android': ['./index.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' }, 
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?optional=runtime']
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-native-camera/,
        loaders: ['babel-loader?optional=es7.objectRestSpread']
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-native-localization/,
        loaders: ['babel-loader?optional=runtime']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6', '.json'],
    alias: {
      noble: 'react-native-ble'
    }
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};