var router = require('express').Router();

router.get('/', function (req, res) {
  res.send('rooms');
});

router.post('/', function (req, res) {
  res.send("Your posted room data is: " + JSON.stringify(req.body));
});

router.get('/:id', function (req, res) {
  res.send('room: ' + req.params.id);
});

module.exports = router;