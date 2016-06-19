var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// This will applied to all router modules
app.use(bodyParser.json());

app.use('/users', require('./routers/users'));
app.use('/rooms', require('./routers/rooms'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

