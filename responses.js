var express = require('express');
var _ = require('lodash');
var app = express();

app.engine('mustache', require('mustache-express4'));
app.set('view engine', 'mustache');
app.set('partials', __dirname + '/views/partials');
app.set('views', __dirname + '/views');

app.get('/send1', function (req, res) {
  res.send('send some text');
});
app.get('/send2', function (req, res) {
  res.send([1, 2, 3]);
});
app.get('/send3', function (req, res) {
  res.send({aaa: 111});
});

app.get('/download1', function (req, res) {
  res.download("./package.json");
});

app.get('/download2', function (req, res) {
  res.download('./package.json', 'my.json');
});

app.get('/end', function (req, res) {
  res.end();
});

app.get('/json', function (req, res) {
  res.json({aaa: 111});
});

app.get('/jsonp', function (req, res) {
  res.jsonp({user: 'tobi'});
});

app.get('/redirect', function (req, res) {
  res.redirect("http://google.com");
});

app.get('/render', function (req, res) {
  res.render("hello", {name: "Freewind"});
});

app.get('/sendFile', function (req, res) {
  // must be absolute file
  res.sendFile(__dirname + "/package.json");
});

app.get('/sendStatus', function (req, res) {
  res.sendStatus(999);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});