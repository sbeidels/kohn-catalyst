var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongoose/connection');
var Application = require('../models/application');

// Import promise engine
var Promise = require('bluebird');
// Tell mongoose we are using the Bluebird promise library
mongoose.Promise = require('bluebird');
// Convert mongoose API to always return promises using Bluebird's promisifyAll
Promise.promisifyAll(mongoose);

// Helper query functions
var helpers = require('../mongoose/read-helpers');
var api = require("../controllers/api");

router.get('/show', api.getAllDocuments, function(req, res) {
    // Create a static list
    var context = {
        static_list: {
            state : [ "Ohio", "Montana", "Alaska" ],
            city : [ "Austin", "San Diego", "New York" ]
        }
    };

    res.render('application-list', res.locals.results);
});

router.get('/status', api.getDocumentByStatus, function(req, res) {
    res.json(res.locals.results);
});

router.get('/:id', api.getDocumentById, function(req, res) {
    res.json(res.locals.results);
});

// We use the route like normal
// router.<HTTP-VERB>(<LOCAL URI>, <API MIDDLEWARE>, <CONTINUE LIKE NORMAL>)
router.get('/all', api.getAllDocuments, function(req, res) {
    // We receive req and res from <api.getAllDocuments>
    // Local variables are stored in res.locals
    var context = res.locals.results; // Keep our sanity
    console.log('[ TEST / ALL ] context.count:', context.count);
    // Just like normal, 'context' provided by the API <3
    res.render('application-list', context);
});


module.exports = router;
