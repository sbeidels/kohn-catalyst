var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongoose/index');
var Application = require('../models/application');

// Import promise egnine
var Promise = require('bluebird');
// Tell mongoose we are using the Bluebird promise library
mongoose.Promise = require('bluebird');
// Convert mongoose API to always return promises using Bluebird's promisifyAll
Promise.promisifyAll(mongoose);

// Helper query functions
var helpers = require('../mongoose/read-helpers');

router.get('/view', function(req, res) {

    Promise.props({
        count: Application.find().count().execAsync(),
        application: Application.find().lean().execAsync()
    })
        .then(function(results) {
            res.render('view', results);
        })
        .catch(function(err) {
            console.error(err);
        });

});

module.exports = router;

