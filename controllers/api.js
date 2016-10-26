// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import any required modules
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var mongoose = require('mongoose');
var db = require('../mongoose/connection');
// var Application = require('../models/application');
var DocumentPackage = require('../models/documentPackage');
var bluebird = require('bluebird');
var Promise = require('bluebird'); // Import promise engine
mongoose.Promise = require('bluebird'); // Tell mongoose to use bluebird
Promise.promisifyAll(mongoose); // Convert all of mongoose to promises with bleubird

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Global database value
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// var db = 'test';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Retrieve a list of all applications and their count
// Type: GET
// Address: /api/find/allapplications
// Returns: list[application]
// Response:
//      200 - OK
//      400 - Bad Request
//      500 - Internal server error
//      503 - Service unavailable
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// We don't want any of this to run until we tell it to run, so we immediately export it
// Currently these two function are MIDDLEWARE
//      Middleware Docs: https://expressjs.com/en/guide/using-middleware.html
//      Inspiration: https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6#.6ttj8e6rs
// Basically, these function take this:
//      router.get('/all', function(req, res) { .. }
// And transform it into:
//      router.get('/all', api.getAllDocuments, function(req, res) { .. }
//
// They keep req, res, err, and next inact as they are passed around
// It is best practice to store new variable in res.local.<your variable>
module.exports = {
    getAllDocuments: function (req, res, next) {
        console.log('[ API ] getAllDocuments :: Call invoked');

        Promise.props({
            application: DocumentPackage.find().lean().execAsync(),
            count: DocumentPackage.find().count().execAsync()
        })
            .then(function (results) {
                // Save the results into res.locals
                res.locals.results = results;

                for (var i = 0, len = results.count; i < len; i++) {
                    console.log('[ API ] getAllDocuments :: Found document package with _id: ' + results.application[i]._id);
                }
                console.log('[ API ] getAllDocuments :: Document package count:', results.count);

                // If we are at this line all promises have executed and returned
                // Call next() to pass all of this glorious data to the next express router
                next();
            })
            .catch(function (err) {
                console.error(err);
            })
            .catch(next);
    },

    getDocumentById: function (req, res, next) {
        console.log('[ API ] getDocumentById :: Call invoked with id: ' + req.params.id);

        Promise.props({
            document: DocumentPackage.findById(req.params.id).lean().execAsync()
        })
            .then(function(results) {
                // TODO: Confirm true/false is correct
                if (results) {
                    console.log('[ API ] getDocumentById :: Documents package found: FALSE');
                }
                else {
                    console.log('[ API ] getDocumentById :: Documents package found: TRUE');
                }

                res.locals.results = results;

                next();
            })
            .catch(function(err) {
                console.error(err);
            })
            .catch(next);
    },

    getDocumentByStatus: function(req, res, next) {
        console.log('[ API ] getDocumentByStatus :: Call invoked');

        Promise.props({
            new: DocumentPackage.find({status: "new"}).lean().execAsync(),
            phone: DocumentPackage.find({status: "phone"}).lean().execAsync(),
            documents: DocumentPackage.find({status: "documents"}).lean().execAsync(),
            discuss: DocumentPackage.find({status: "discuss"}).lean().execAsync(),
            visit: DocumentPackage.find({status: "visit"}).lean().execAsync(),
            handle: DocumentPackage.find({status: "handle"}).lean().execAsync(),
            declined: DocumentPackage.find({status: "declined"}).lean().execAsync(),
            project: DocumentPackage.find({status: "project"}).lean().execAsync()
        })
            .then(function (results) {
                // TODO: Confirm true/false is correct
                if (results) {
                    console.log('[ API ] getDocumentByStatus :: Documents package found: FALSE');
                }
                else {
                    console.log('[ API ] getDocumentByStatus :: Documents package found: TRUE');
                }
                res.locals.results = results;
                next();
            })
            .catch(function(err) {
                console.error(err);
            })
            .catch(next);
    }
};