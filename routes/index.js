var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'I am a title property from index.js',
        body: 'John\'s example page. I am the body property in route \'/\'',
        // layout: false
    });
});

module.exports = router;
