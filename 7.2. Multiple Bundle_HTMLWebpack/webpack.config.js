const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    index: './src/index.js',
    product: './src/products.js',
  },
  output: {
    filename: '[name].bundler.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /.(png|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /.(ttf|woff|woff2)$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['index'],
      inject: true,
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'src/products.html',
      chunks: ['product'],
      inject: true,
      filename: 'products.html'
    })
  ]
}