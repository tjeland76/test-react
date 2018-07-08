import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import open from 'open';
/* eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();
const compiler = webpack(config);

//app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
  //publicPath: config.output.publicPath
}));



const controllers = require('./controllers');
controllers.set(app);

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});