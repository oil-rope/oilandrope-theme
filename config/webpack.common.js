const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_PATH = path.resolve(__dirname, '../');
const SOURCE_PATH = path.join(BASE_PATH, 'src/');

module.exports = {
  entry: {
    oilandropetheme: './src/index.jsx',
  },
  output: {
    path: path.join(BASE_PATH, 'vendor/'),
    chunkFilename: '[name].[contenthash:8].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Oil &amp; Rope Theme',
      template: path.join(SOURCE_PATH, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/oilandrope.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  performance: {
    assetFilter: (assetFilename) => !/\.(map|css)$/.test(assetFilename),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Components: path.join(SOURCE_PATH, 'components/'),
    },
  },
};
