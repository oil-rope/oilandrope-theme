/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const BASE_PATH = path.resolve(__dirname, '../../');
const SOURCE_PATH = path.join(BASE_PATH, 'src/');
const OUTPUT_PATH = path.join(BASE_PATH, 'dist/');

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
    path: OUTPUT_PATH,
    publicPath: 'auto',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(OUTPUT_PATH, 'index.html'),
      publicPath: 'auto',
      template: path.join(SOURCE_PATH, 'index.ejs'),
      title: 'Oil &amp; Rope Theme',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(s?css)$/,
        use: [
          {
            // Injects CSS using multiple `<style>`
            loader: 'style-loader',
          },
          {
            // Translate CSS into CommonJS modules
            loader: 'css-loader',
          },
          {
            // This is required for Autoprefixer
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            // Compiles Sass/SCSS files into CSS
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
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
  webpackConf.plugins[0].userOptions.environment = argv.mode;
  if (argv.mode === 'development') {
    webpackConf.devtool = 'eval-source-map';
    webpackConf.output.filename = '[name].[contenthash].js';
    webpackConf.output.chunkFilename = '[name].[contenthash].js';
    webpackConf.performance.hints = false;
    webpackConf.optimization = { moduleIds: 'named' };
    webpackConf.devServer = {
      client: {
        overlay: true,
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
      },
      historyApiFallback: true,
      host: '127.0.0.1',
      hot: true,
      liveReload: true,
      open: true,
      port: 8080,
      static: OUTPUT_PATH,
      watchFiles: { paths: SOURCE_PATH },
    };
  }
  if (argv.mode === 'production') {
    webpackConf.plugins = [
      ...webpackConf.plugins,
      new MiniCssExtractPlugin({
        filename: 'css/oilandrope.css',
      }),
    ];
    webpackConf.module.rules[1].use[0] = {
      loader: MiniCssExtractPlugin.loader,
    };
    webpackConf.module.rules = [
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg',
        },
      },
      ...webpackConf.module.rules,
    ];
  }
  return webpackConf;
};
