/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BASE_PATH = path.resolve(__dirname, '../');
const SOURCE_PATH = path.join(BASE_PATH, 'src/');

module.exports = {
  entry: {
    oilandropetheme: './src/index.tsx',
  },
  output: {
    path: path.join(BASE_PATH, 'dist/'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
    clean: true,
    publicPath: '/',
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
        test: /\.(ts|tsx)$/,
        use: 'ts-loader?configFile=tsconfig.webpack.json',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  performance: {
    assetFilter: (assetFilename) => !/\.(map|css|png)$/.test(assetFilename),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': SOURCE_PATH,
      '@Components': path.join(SOURCE_PATH, 'components/'),
      '@Icons': path.join(SOURCE_PATH, 'icons/'),
    },
  },
};
