var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var db = require('../mongoose/index');
//var Application = require('../models/application');
var DocumentPackage = require('../models/documentPackage');

var Promise = require('bluebird'); // Import promise engine
mongoose.Promise = require('bluebird'); // Tell mongoose we are using the Bluebird promise library
Promise.promisifyAll(mongoose); // Convert mongoose API to always return promises using Bluebird's promisifyAll

// Helper query functions
var helpers = require('../mongoose/read-helpers');

//Need ObjectID to search by ObjectID
var ObjectId = require('mongodb').ObjectID;

router.post('/', function(req, res) {
    console.log("POST to page without ID parameter");
});

/*
 Attempting to get Update Data
 */
router.post('/:id', function(req, res) {
    //Checking what's in params
    console.log("Request to update _ID " + ObjectId(req.params.id));
    console.log("Value received: " + req.body.value);
    console.log("Name received: " + req.body.name);

    var updateValue = { $set : {} };
    updateValue.$set[req.body.name] = req.body.value;

    // var updateStatus = DocumentPackage.update(
    //     {_id: ObjectId(req.params.id)},
    //     updateValue
    // )
    //  console.log(updateValue);


});

router.post('/phone/home/:id', function(req, res) {
    //Checking what's in params
    console.log("Request to update _ID " + ObjectId(req.params.id));
    console.log("Value received: " + req.body.value);
    console.log("Name received: " + req.body.name);

    DocumentPackage.update(
        {_id: ObjectId(req.params.id)},
        { $set: {"application.phone.home": req.body.value}},
        function(err)
        {
            if(err)
            {   res.status(500).send({ status: 'error' });}
            else
            {   res.status(200).send({ status: 'success' });}
        }
    );
});


module.exports = router;
