const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist')
  },
}