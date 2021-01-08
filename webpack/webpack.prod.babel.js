import merge from 'webpack-merge';

import path from 'path';
import autoprefixer from 'autoprefixer';

import common from './webpack.common.babel';

import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },
  stats: 'errors-only',
  bail: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new CompressionPlugin({ filename: '/compress/[path].gz[query]' }),
  ],
  optimization: {
    minimizer: [new UglifyJSPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,

          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/_global.scss'),
            },
          },
        ],
      },
    ],
  },
});
