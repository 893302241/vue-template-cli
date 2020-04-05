const path = require('path')
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    contentBase: '../dist'
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process_env': 'development'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
})