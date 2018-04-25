const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./frontend/app.jsx",
  output: {
    path: path.join(__dirname,'/frontend/public'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', `react`],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};