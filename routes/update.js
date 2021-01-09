var express = require('express');
var router = express.Router();

/* PUT users listing. */
router.put('/', function(req, res, next) {
  res.send('prueba');
});

module.exports = router;
