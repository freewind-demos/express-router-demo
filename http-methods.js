var express = require('express');
var _ = require('lodash');
var app = express();

var AVALIABLE_METHODS = [
  "get", "post", "put", "head", "delete", "options",
  "trace", "copy", "lock", "mkcol", "move", "purge",
  "propfind", "proppatch", "unlock", "report", "mkactivity",
  "checkout", "merge", "m-search", "notify",
  "subscribe", "unsubscribe", "patch", "search", "connect"
];

_.each(AVALIABLE_METHODS, function (method) {
  app[method]('/', function (req, res) {
    res.send("Your http method is: " + req.method);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});