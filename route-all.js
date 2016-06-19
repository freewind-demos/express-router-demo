var express = require('express');
var app = express();

app.all('/', function (req, res, next) {
  console.log("You http method is: " + req.method);
  next();
});

app.get('/', function (req, res) {
  res.send("handle in get handler");
});

app.put('/', function (req, res) {
  res.send("handle in put handler");
});

app.all('/', function (req, res) {
  res.send("other method: " + req.method);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});