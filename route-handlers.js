var express = require('express');
var _ = require('lodash');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello");
});

function handler1(req, res, next) {
  console.log("In handler 1");
  next();
}

function handler2(req, res, next) {
  console.log("In handler 2");
  next();
}

function handler3(req, res, next) {
  console.log("In handler 3");
  next();
}

app.get("/multi-handlers", handler1, handler2);
app.get("/handler-array", [handler1, handler2]);
app.get("/handler-combine1", [handler1, handler2], handler3);
app.get("/handler-combine2", handler1, [handler2, handler3]);

app.use(function (req, res) {
  console.log("In final handler");
  res.send("ok");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});