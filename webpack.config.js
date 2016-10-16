var webpack = require('webpack');

var path = require('path');
var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: './js/client.js',
  output: {
      path: distPath,
      filename: "client.min.js"
  },
  devServer: {
    contentBase: distPath,
    inline: true,
    port: 3333
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015'],
              plugins: ["react-html-attrs"]
            }
          }
      ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
