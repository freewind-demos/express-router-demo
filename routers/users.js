var router = require('express').Router();

router.get('/', function (req, res) {
  res.send('users');
});

router.post('/', function (req, res) {
  res.send("Your posted user data is: " + JSON.stringify(req.body));
});

router.get('/:id', function (req, res) {
  res.send('user: ' + req.params.id);
});


module.exports = router;