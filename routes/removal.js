var express = require('express');
var router = express.Router();

/*  DELETE users listing. */
router.delete('/', function(req, res, next) {
  res.send('Prueba 2');
});

module.exports = router;
