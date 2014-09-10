var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res) {
  file = fs.readfileSync('./log.json');
  res.send(file);
});

router.post('/webhook', function(req, res) {
  fs.writefileSync('./log.json', req.body);
});

module.exports = router;
