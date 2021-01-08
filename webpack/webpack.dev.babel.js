import merge from 'webpack-merge';
import path from 'path';

import common from './webpack.common.babel';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/styles/variables.scss'),
            },
          },
        ],
      },
    ],
  },
});
