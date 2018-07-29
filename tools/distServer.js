import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */


const port = process.env.PORT || 68000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

const controllers = require('./controllers');
controllers.set(app);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
