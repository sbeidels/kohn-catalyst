var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'I am a title property from index.js',
        body: 'I am a body property in route \'/\''
    });
});

module.exports = router;
