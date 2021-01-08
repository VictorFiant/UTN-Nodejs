var express = require('express');
var router = express.Router();
var productsControllers = require("../controllers/productsControllers")
/* GET users listing. */
router.get('/', productsControllers.getAll);

module.exports = router;
