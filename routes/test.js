var express = require('express');
var router = express.Router();

/* READ, UPDATE, DELETE */
router.get('/', function(req, res) {
    res.send('Show rest list with delete and update feature (CRUD)');
});

/* INSERT */
router.get('/insert_user', function(req, res) {
    res.send("Insert a new rest (C)");
});

/* NEW */
router.get('/new', function(req, res) {
    res.render('rest-new');
});

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

module.exports = router;
