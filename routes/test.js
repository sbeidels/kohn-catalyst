var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongoose/connection');
var Application = require('../models/application');
var DocumentPackage = require('./../models/documentPackage');

// Import promise engine
var Promise = require('bluebird');
// Tell mongoose we are using the Bluebird promise library
mongoose.Promise = require('bluebird');
// Convert mongoose API to always return promises using Bluebird's promisifyAll
Promise.promisifyAll(mongoose);

// Helper query functions
var helpers = require('../mongoose/read-helpers');
var api = require("../controllers/api");

router.post('/add', api.postDocument, function(req, res) {
    res.json(res.locals.doc);
});

router.get('/show', api.getAllDocuments, function(req, res) {
    res.json(res.locals.results);
});

router.get('/status', api.getDocumentByStatus, function(req, res) {
    res.json(res.locals.results);
});

router.route('/:id')
    .get(api.getDocumentById, function(req, res) {
        res.json(res.locals.results);
    })
    .put(api.putUpdateDocument, function(req, res) {
        res.json(res.locals);
    })

router.put('update-:id', api.putUpdateDocument, function(req, res) {

})

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
