var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log("Global route handler 1");
  next();
});

app.get('/', function (req, res, next) {
  console.log("Handler for /");
  res.send("Hello, world");
  next();
});

app.use(function (req, res, next) {
  console.log("Global route handler 2");
  next();
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});