// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Import any required modules
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var mongoose = require('mongoose');
var db = require('../mongoose/index');
var ApplicationSchema = require('../models/application');
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
//      router.get('/all', api.getAllApplications, function(req, res) { .. }
//
// They keep req, res, err, and next inact as they are passed around
// It is best practice to store new variable in res.local.<your variable>
module.exports = {
    getAllApplications: function (req, res, next) {
        console.log('[ API ] getAllApplications - called');

        Promise.props({
            application: ApplicationSchema.find().lean().execAsync(),
            count: ApplicationSchema.find().count().execAsync()
        })
            .then(function (results) {
                console.log('[ API ] getAllApplications - Application documents:', results.applications);
                console.log('[ API ] getAllApplications - Application document count:', results.count);
                // Save the results into res.local
                // I used res.local.results to keep the name the same
                res.locals.results = results;
                // If we are at this line all promises have executed and returned
                // Call next() to pass all of this glorious data to the next express router
                next();
            })
            .catch(next);
            // .catch(function (err) {
            //     console.error(err);
            // });
    },

    // Currently unused
    getApplicationById: function (req, res, next) {
        console.log('[ API ] getApplicationById called');
        // Get the ID from the parameter and cast it as an object ID
        // TODO: Express issues says we cannot access req.params.id in middleware
        // How can I get around this?
        var id = ObjectId(req.params.id);

        console.log('[ API ] getApplicationById - req.params.id = ' + id);

        Promise.props({
            application: ApplicationSchema.find({_id: id}).lean().execAsync()
        })
            .then(function (results) {
                console.log('[ API ] getApplicationById returning:');
                console.log(results.application);
                res.results = results;
            })
            .then(next())
            .catch(function (err) {
                console.error(err);
            });
    }
};