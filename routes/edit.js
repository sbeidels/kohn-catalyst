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

/**
 * Attempting to get Update Data
 **/
router.post('/:id', function(req, res) {
    //Checking what's in params
    console.log("Request to update _ID " + ObjectId(req.params.id));
    console.log("Value received: " + req.body.value);
    console.log("Name received: " + req.body.name);

    var updateValue = { $set : {} };
    updateValue.$set[req.body.name] = req.body.value;
    console.log(updateValue);

    var updateStatus = DocumentPackage.update(
        {_id: ObjectId(req.params.id)},
        updateValue,
        function(err){
            if(err)
            {   res.status(500).send({ status: 'error' });}
            else
            {   res.status(200).send({ status: 'success' });}
        }
    );


});

/**
 * EDIT ADDRESS
 **/
router.post('/address/:id', function(req, res) {
    //Checking what's in params
    console.log("Updating: ");
    console.log("Line 1: " + req.body["value[line_1]"]);
    console.log("Line 2: " + req.body["value[line_2]"]);
    console.log("City: " + req.body["value[city]"]);
    console.log("State: " + req.body["value[state]"]);
    console.log("Zip: " + req.body["value[zip]"]);

    DocumentPackage.update(
        {_id: ObjectId(req.params.id)},
        { $set:
            {
                "application.address.line_1": req.body["value[line_1]"],
                "application.address.line_2": req.body["value[line_2]"],
                "application.address.city": req.body["value[city]"],
                "application.address.state": req.body["value[state]"],
                "application.address.zip": req.body["value[zip]"]
            }
        },
        function(err)
        {
            if(err)
            {   res.status(500).send({ status: 'error' });}
            else
            {   res.status(200).send({ status: 'success' });}
        }
    );
});

/**
 * EDIT FULL NAME
 **/
router.post('/name/:id', function(req, res) {
    //Checking what's in params
    console.log("Updating: ");
    console.log("First Name: " + req.body["value[first]"]);
    console.log("Middle Name: " + req.body["value[middle]"]);
    console.log("Last Name: " + req.body["value[last]"]);

    DocumentPackage.update(
        {_id: ObjectId(req.params.id)},
        { $set:
        {
            "application.name.first": req.body["value[first]"],
            "application.name.middle": req.body["value[middle]"],
            "application.name.last": req.body["value[last]"]
        }
        },
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
