var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("index page");
});

app.get('/users/:name', function (req, res) {
  res.send("The name is: " + req.params.name);
});

app.get("/products/:id(\\d+)", function (req, res) {
  res.send("Id: " + req.params.id);
});

app.get(/go{2,}gle/, function (req, res) {
  res.send("Google!");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});