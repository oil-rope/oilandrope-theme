/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const BASE_PATH = path.resolve(__dirname, '../../');
const SOURCE_PATH = path.join(BASE_PATH, 'src/');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack-cli').WebpackDevServerOptions } */
const webpackConf = {
  entry: {
    oilandropetheme: path.join(SOURCE_PATH, 'index.tsx'),
  },
  // https://webpack.js.org/configuration/output/
  output: {
    chunkFilename: '[id].[contenthash].js',
    clean: true,
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(BASE_PATH, 'dist'),
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
        test: /\.tsx?$/,
        use: 'ts-loader?configFile=tsconfig.webpack.json',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.s?css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            // Translate CSS into CommonJS modules
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
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
    hints: 'error',
  },
  resolve: {
    // NOTE: We need to resolve JS in order to node_modules to work
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': SOURCE_PATH,
      '@Components': path.join(SOURCE_PATH, 'components/'),
      '@Icons': path.join(SOURCE_PATH, 'icons/'),
    },
  },
};

module.exports = (_env, argv) => {
  if (argv.mode === 'development') {
    webpackConf.devtool = 'eval-source-map';
    webpackConf.output.filename = '[name].[contenthash].js';
    webpackConf.output.chunkFilename = '[name].[contenthash].js';
    webpackConf.performance.hints = false;
    webpackConf.optimization = { moduleIds: 'named' };
    webpackConf.devServer = {
      historyApiFallback: true,
      liveReload: true,
      client: {
        overlay: true,
      },
      host: '127.0.0.1',
      port: 8080,
      open: true,
      watchFiles: { paths: SOURCE_PATH },
    };
  }
  return webpackConf;
};
