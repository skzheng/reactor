const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  
  entry: [
    './index.js',
  ],

  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      }
    ]
  },
  
  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};


