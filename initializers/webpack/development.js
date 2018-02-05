import path from 'path';

import webpack from 'webpack';

const root = path.join(process.cwd(), 'src');

export default {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader/url' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      root
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
