var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/', function(req, res, next) {
  res.send('Prueba 2');
});

module.exports = router;
