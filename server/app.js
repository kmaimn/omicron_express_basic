var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var songs = require('./routes/songs');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/songs', songs);

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  //
  // console.log('What is in req.params[0]?', req.params[0]);

  //console.log('dirname: ', __dirname);
  //console.log('path', path.join(__dirname, '../public', file));
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
