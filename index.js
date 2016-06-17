var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var fs = require('fs');

var app = express();
app.use(methodOverride());

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', {error: err});
}

app.use(errorHandler);

// app.use(function (err, req, res, next) {
//     console.log("There is error: " + err);
//
//     if (err) {
//         console.log("There is error: " + err);
//         res.status(500);
//         res.send("errrrr");
//         return;
//     }
//     next();
// });


// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

var users = [];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/user', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  users.push({
    name: name,
    email: email
  });
  res.sendStatus(201);
});

app.get('/users', function (req, res) {
  res.send(users);
});

app.get('/err', function (req, res, next) {
  fs.readFile("./no-exist", "utf-8", function (err, data) {
    if (err)  next(err);
    else
      res.send("OK");
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});