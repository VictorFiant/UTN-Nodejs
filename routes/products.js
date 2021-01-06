var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const productos = [
    {
      id:1,
      name:"Fiat 1"
    },
    {
      id:2,
      name:"Fiat 2"
    }
  ]
  res.json(productos);
});

module.exports = router;
