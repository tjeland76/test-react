import mailer from './mailer';
import bodyParser from 'body-parser';
//import newsData from '../src/services/newsData.js';
import clone from 'clone';
import request from 'request';

module.exports.set = function(app) {
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// create application/x-www-form-urlencoded parser
  const urlencodedParser = bodyParser.urlencoded({ extended: true });

  function ignoreFavicon(req, res, next) {
    if (req.originalUrl.indexOf('/favicon')>-1) {
      res.status(204).json({nope: true});
    }
    else {
      next();
    }
  }

  app.use(ignoreFavicon);


app.get('/newsfeed', function(req, res){

    // const startIndex = req.query.index,
    // pageSize = req.query.page_size;

    let queryString = {};

    if (req.query.index) {
      queryString["page[number]"] = req.query.index;
    }

    if (req.query.page_size) {
      queryString["page[size]"] = req.query.page_size;
    }

    if (req.query.showHomepage) {
      queryString["filter[showonhome]"] = "1";
    }

    request({
      //uri: `http://content.onesocialmama.com/json/entries?page[number]=${startIndex}&page[size]=${pageSize}`,
      uri: `http://content.onesocialmama.com/json/entries`,
      json: true,
     qs: queryString
  }, function(error, response, body) {
      res.send(body);
    });

    // const startIndex = req.query.index,
    //     pageSize = req.query.page_size,
    //     newsCount = newsData.newsData.length;
    // let moreItems = true;
    //
    // if (startIndex) {
    //     const newsArrayCopy = clone(newsData.newsData);
    //     let newsArray = newsArrayCopy.reverse();
    //     let endNewsItemIndex = parseInt(startIndex) + parseInt(pageSize);
    //
    //     if (endNewsItemIndex > newsCount) {
    //         endNewsItemIndex = newsCount;
    //         moreItems = false;
    //     }
    //
    //     const newsSegment = newsArray.slice(parseInt(startIndex), endNewsItemIndex);
    //
    //     const newsResponse = {
    //       newsData: newsSegment,
    //       index: endNewsItemIndex,
    //       moreItems: moreItems
    //     };
    //
    //     res.send(newsResponse);
    // } else {
    //     res.send(newsData);
    // }

});

app.get('/newsitem', function(req, res){
  const newsId = req.query.id;

  request({
    uri: `http://content.onesocialmama.com/json/entries/${newsId}`,
    json: true
  }, function(error, response, body) {
    res.send(body);
  });

    // const newsId = req.query.id;
    // let newsItem = null;
    //
    // if (newsId) {
    //     const newsArrayCopy = clone(newsData.newsData);
    //     newsItem = newsArrayCopy.find(x => x.id === parseInt(newsId));
    // }
    //
    // const newsResponse = {
    //     newsData: newsItem
    // };
    //
    // res.send(newsResponse);

});

  app.get('/page', function(req, res){
    const pageId = req.query.pageId;

    request({
      uri: `http://content.onesocialmama.com/json/pages/${pageId}`,
      json: true
    }, function(error, response, body) {
      res.send(body);
    });

    // const newsId = req.query.id;
    // let newsItem = null;
    //
    // if (newsId) {
    //     const newsArrayCopy = clone(newsData.newsData);
    //     newsItem = newsArrayCopy.find(x => x.id === parseInt(newsId));
    // }
    //
    // const newsResponse = {
    //     newsData: newsItem
    // };
    //
    // res.send(newsResponse);

  });


app.post('/send-contact', urlencodedParser, (req, res) => {

    if (!req.body) return res.sendStatus(400);
    else {
        for(let form in req.body){
            let data = JSON.parse(form);
            mailer({ email: data.email, name: data.name, text: data.message }).then(() => {
                console.log(`Sent the message "${data.message}" from <${data.name}> ${data.email}.`);
                //res.end('It worked!');
                res.sendStatus(200);
            }).catch((error) => {
                console.log(`Failed to send the message "${data.message}" from <${data.name}> ${data.email} with the error ${error && error.message}`);
                res.sendStatus(400);
                //res.end('It failed');
            });

        }
    }

});

}
