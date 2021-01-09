var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.send('Prueba 3');
});

module.exports = router;
