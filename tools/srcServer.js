import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import mailer from './mailer';
import fs from 'fs';
import newsData from '../src/services/newsData.js';
import clone from 'clone';
import bodyParser from 'body-parser';
/* eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/newsfeed', function(req, res){

    const startIndex = req.query.index,
        pageSize = req.query.page_size,
        newsCount = newsData.newsData.length;
    let moreItems = true;

    if (startIndex) {
        const newsArrayCopy = clone(newsData.newsData);
        let newsArray = newsArrayCopy.reverse();
        let endNewsItemIndex = parseInt(startIndex) + parseInt(pageSize);

        if (endNewsItemIndex > newsCount) {
            endNewsItemIndex = newsCount;
            moreItems = false;
        }

        const newsSegment = newsArray.slice(parseInt(startIndex), endNewsItemIndex);

        const newsResponse = {
          newsData: newsSegment,
          index: endNewsItemIndex,
          moreItems: moreItems
        };

        res.send(newsResponse);
    } else {
        res.send(newsData);
    }

});

app.get('/newsitem', function(req, res){

    const newsId = req.query.id;
    let newsItem = null;

    if (newsId) {
        const newsArrayCopy = clone(newsData.newsData);
        newsItem = newsArrayCopy.find(x => x.id === parseInt(newsId));
    }

    const newsResponse = {
        newsData: newsItem
    };

    res.send(newsResponse);

});

app.post('/send-contact', urlencodedParser, (req, res) => {
    
    if (!req.body) return res.sendStatus(400);
    else {
        for(let form in req.body){
            let data = JSON.parse(form);
            mailer({ email: data.email, name: data.name, text: data.message }).then(() => {
                console.log(`Sent the message "${data.message}" from <${data.name}> ${data.email}.`);
                res.end('It worked!');
            }).catch((error) => {
                console.log(`Failed to send the message "${data.message}" from <${data.name}> ${data.email} with the error ${error && error.message}`);
                res.end('It failed');
            });
            
//            let data = {
//                email: req.body[form]["email"],
//                name: req.body[form]["name"],
//                message: req.body[form]["message"]
//            };
            
//            let data = {
//                R:Number(req.body[datapoint]["x"]),
//                Y:Number(req.body[datapoint]["y"]),
//                Orientation:Number(req.body[datapoint]["orientation"]),
//                Time:req.body[datapoint]["timestamp"],
//                UserID:req.body[datapoint]["id"]
//            };
//            //insert the newly constructed document into the database
//            point.save(function(err, point){
//                if(err) return console.error(err);
//                else console.dir(point);
//            });
        }
    }


});

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
