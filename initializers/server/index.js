const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');

require('babel-register');
// eslint-disable-next-line
require.extensions['.css'] = () => {
  return;
};

const port = 3001;

const express = require('express');
const morgan = require('morgan');
const application = express();

application.use(morgan('combined'));
application.use(express.static('src/static'));
application.set('views', __dirname);
application.set('view engine', 'ejs');

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');
  const config = require('../webpack/development.js').default;
  const compiler = webpack(config);

  application.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: { colors: true }
      }
    )
  );

  application.use(
    webpackHot(compiler)
  );
}

application.get('*', require('./render').default);

application.listen(port, function() { console.log('Server listen port 3001')})
