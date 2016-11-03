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


/** Status codes from models/DocumentPackage.js
 Codes needed are:
 Code - description
 new - new document package, has yet to be reviewed
 phone - document package has been seen, internal agent needs to contact client and verify document package information
 documents - additional documents are needed from the client before document package can proceed
 discuss - internal discussion needs to take place to determine if the document package is approved, denied, handle-it, or other
 visit - a member of catalyst must visit the property to determine the extent of repairs needed
 handle - the document package is forwarded to the handle-it team to be completed
 declined - the document package was declined for various reasons
 project - the project has been approved and the document package will be converted to a project package
 **/

router.get('/', api.getDocumentByStatus, function(req, res, next) {

    var payload = {};

    //add all other existing statuses to processing array
    payload.processing = [];

    if (res.locals.results.new[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'new\'');
    } else {
        res.locals.results.new.forEach(function (element) {
            element = formatDate(element);
        });
    }
    payload.new = res.locals.results.new;

    if (res.locals.results.declined[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'declined\'');
    } else {
        res.locals.results.declined.forEach(function (element) {
            element = formatDate(element);
        });
    }
    payload.declined = res.locals.results.declined;

    if (res.locals.results.phone[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'phone\'');
    } else {
        res.locals.results.phone.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    if (res.locals.results.documents[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'documents\'');
    } else {
        res.locals.results.documents.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    if (res.locals.results.discuss[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'discuss\'');
    } else {
        res.locals.results.discuss.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    if (res.locals.results.visit[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'visit\'');
    } else {
        res.locals.results.visit.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    if (res.locals.results.handle[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'handle\'');
    } else {
        res.locals.results.handle.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    if (res.locals.results.project[0] == null) {
        console.log('[ ROUTER ] /view/status :: Unable to find Document Package with status: \'project\'');
    } else {
        res.locals.results.project.forEach(function (element) {
            element = formatDate(element);
            payload.processing.push(element);
        });
    }

    res.render('vetting', payload);
});

/* Route to specific application by Object ID */
router.get('/:id', function(req, res) {
    //Checking what's in params
    console.log("Rendering application " + ObjectId(req.params.id));

    /* search by _id. */
    Promise.props({
        application: DocumentPackage.find({_id: ObjectId(req.params.id)}).lean().execAsync()
    })
        .then(function(result) {
            //format birth date for display
            if(result.application[0].application.dob.date != null) {
                var dobYear = result.application[0].application.dob.date.getFullYear();
                //get month and day with padding since they are 0 indexed
                var dobDay = ( "00" + result.application[0].application.dob.date.getDate()).slice(-2);
                var dobMon = ("00" + (result.application[0].application.dob.date.getMonth()+1)).slice(-2);

                result.application[0].application.dob.date = dobYear + "-" + dobMon + "-" + dobDay;
            }
            res.render('view', result.application[0]);
        })
        .catch(function(err) {
            console.error(err);
        });

});

/**
 * Takes the VERY long date in the DB and makes it into a nicer format
 * @param element
 * @returns {The element with formatted date}
 */
function formatDate(element)
{
    var Year = element.updated.getFullYear();
    //get month and day with padding since they are 0 indexed
    var Day = ( "00" + element.updated.getDate()).slice(-2);
    var Mon = ("00" + (element.updated.getMonth()+1)).slice(-2);
    element.updated = Mon + "/" + Day + "/" + Year;
    return element;
}

module.exports = router;

