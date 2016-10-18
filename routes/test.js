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

router.get('/show', function(req, res) {
    // Create a static list
    var context = {
        static_list: {
            state : [ "Ohio", "Montana", "Alaska" ],
            city : [ "Austin", "San Diego", "New York" ]
        }
    };

    // Ref: http://stackoverflow.com/questions/6180896/how-to-return-mongoose-results-from-the-find-method
    var count, application;

    Promise.props({
        count: Application.find().count().execAsync(),
        application: Application.find().lean().execAsync()
    })
        .then(function(results) {
            results.context = context;
            res.render('application-list', results);
        })
        .catch(function(err) {
            console.error(err);
        });
});

var api = require("../controllers/api");

// We use the route like normal
// router.<HTTP-VERB>(<LOCAL URI>, <API MIDDLEWARE>, <CONTINUE LIKE NORMAL>)
router.get('/all', api.getAllApplications, function(req, res) {
    // We receive req and res from <api.getAllApplications>
    // Local variables are stored in res.locals
    var context = res.locals.results; // Keep our sanity
    console.log('[ TEST / ALL ] context.count:', context.count);
    // Just like normal, 'context' provided by the API <3
    res.render('application-list', context);
});


module.exports = router;
