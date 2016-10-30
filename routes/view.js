var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongoose/connection');
var Application = require('../models/application');
var DocumentPackage = require('../models/documentPackage');
var api = require('../controllers/api');


var Promise = require('bluebird'); // Import promise engine
mongoose.Promise = require('bluebird'); // Tell mongoose we are using the Bluebird promise library
Promise.promisifyAll(mongoose); // Convert mongoose API to always return promises using Bluebird's promisifyAll

// Helper query functions
var helpers = require('../mongoose/read-helpers');

//Need ObjectID to search by ObjectID
var ObjectId = require('mongodb').ObjectID;

router.get('/', api.getDocumentByStatus, function(req, res, next) {

    var payload = {};

    payload.new = res.locals.results.new;
    payload.declined = res.locals.results.declined;

    // TODO: ADD OTHER STATUSES LIKE SITE VISIT, ETC
    // Status codes from models/DocumentPackage.js
    // Codes needed are:
    // Code - description
    // new - new document package, has yet to be reviewed
    // phone - document package has been seen, internal agent needs to contact client and verify document package information
    // documents - additional documents are needed from the client before document package can proceed
    // discuss - internal discussion needs to take place to determine if the document package is approved, denied, handle-it, or other
    // visit - a member of catalyst must visit the property to determine the extent of repairs needed
    // handle - the document package is forwarded to the handle-it team to be completed
    // declined - the document package was declined for various reasons
    // project - the project has been approved and the document package will be converted to a project package

    payload.processing = [];

    if (res.locals.results.new[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'new\'');
    } else {
        res.locals.results.new.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.phone[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'phone\'');
    } else {
        res.locals.results.phone.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.documents[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'documents\'');
    } else {
        res.locals.results.documents.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.discuss[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'discuss\'');
    } else {
        res.locals.results.discuss.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.visit[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'visit\'');
    } else {
        res.locals.results.visit.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.handle[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'handle\'');
    } else {
        res.locals.results.handle.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.declined[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'declined\'');
    } else {
        res.locals.results.declined.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    if (res.locals.results.project[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'project\'');
    } else {
        res.locals.results.project.forEach(function (element) {
            payload.processing.push(element);
        });
    }

    res.render('vetting', payload);
});

/** This is the beginning of an example to use
 *          getDocumentByStatus
 */
router.get('/status', api.getDocumentByStatus, function(req, res, next) {
    if (res.locals.results.new[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'new\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.phone[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'phone\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.documents[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'documents\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.discuss[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'discuss\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.visit[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'visit\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.handle[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'handle\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.declined[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'declined\'');
    } else {
        // Do something with the documents you found
    }

    if (res.locals.results.project[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'project\'');
    } else {

    }
    res.json(res.locals.results);
});
/** This is the end of an example to use
 *          getDocumentByStatus
 */

/* Route to specific application */
router.get('/:id', function(req, res) {
    //Checking what's in params
    console.log("Rendering application " + ObjectId(req.params.id));

    /* search by _id. Maybe we can do regular ID but currently
        it's not unique */
    Promise.props({
        application: DocumentPackage.find({_id: ObjectId(req.params.id)}).lean().execAsync()
    })
        .then(function(result) {
            console.log(result.application[0]);
            //Is this how to send just the object rather than an array?
            res.render('view', result.application[0]);
        })
        .catch(function(err) {
            console.error(err);
        });

});

module.exports = router;

