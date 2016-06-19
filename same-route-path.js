var express = require('express');
var app = express();

app.route('/')
  .get(function (req, res) {
    res.send("get");
  })
  .put(function (req, res) {
    res.send("put");
  });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});