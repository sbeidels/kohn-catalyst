var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var db = require('../mongoose/index');
var Application = require('../models/application');

// Helper query functions
var helpers = require('../mongoose/read-helpers');

/* USING HELP QUERY FROM /mongoose/read-helpers.js */
/* THIS EXAMPLE STILL ONLY FINDS ALL DOCUMENTS IN THE COLLECTION */
router.get('/view', function(req, res) {
    Application.find(function(err, docs) {
        if (err)
            res.send(err);
        res.render('view', docs);
    });

});

module.exports = router;

