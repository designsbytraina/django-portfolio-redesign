var webpack = require('webpack');  

module.exports = {  
  entry: [
    "./portfolio/rtg_com/static/js/App.jsx"
  ],
  output: {
    path: __dirname + '/portfolio/rtg_com/static',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
};