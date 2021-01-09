var express = require('express');
var router = express.Router();

// Using an array as the database just for example
// In a real app, data should be stored in a real database
var database = [];

function get(req, res) {
    res.json(database);
}

function getById(req, res) {
    res.json(database[req.params.productId]);
}

function post(req, res) {
    // Adds the data sent to the "database" (array for the example)
    database[req.body.id] = req.body;
    res.sendStatus(200);
}

function put(req, res) {
    database[req.body.id] = req.body;
    res.sendStatus(200);
}

function del(req, res) {
    delete database[req.params.productId];
    res.sendStatus(200)
}

// Define the subroutes, all will have /product as prefix
router.get('/', get);
router.get('/:productId', getById); // /product/1
router.post('/', post);
router.put('/:productId', put);
router.delete('/:productId', del);

module.exports = router;