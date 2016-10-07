var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search-1', function(req, res, next) {

    var query = User.find().limit(10);
    query.exec(function (err, docs) {
        if (err) {
            throw err;
        }
        res.render('search-1', {users: docs});
    });


});

module.exports = router;
