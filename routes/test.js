var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../mongoose/index');
var Application = require('../models/application');

// Import promise egnine
var Promise = require('bluebird');
// Tell mongoose we are using the Bluebird promise library
mongoose.Promise = require('Bluebird');
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
//
// /* GET ALL DOCUMENTS AND RETURN A JSON FILE */
// router.get('/show-all', function(req, res) {
//     Application.find(function(err, docs) {
//         if (err)
//             res.send(err);
//         res.json(docs);
//     });
// });
//
//
// /* USING HELP QUERY FROM /mongoose/read-helpers.js */
// /* THIS EXAMPLE STILL ONLY FINDS ALL DOCUMENTS IN THE COLLECTION */
// router.get('/helper-all', function(req, res) {
//     Application.findAllDocuments(function(err, docs) {
//         if (err) console.error(err);
//         res.json(docs);
//     })
// });
//
// /* USING HELP QUERY FROM /mongoose/read-helpers.js */
// /* THIS EXAMPLE SEARCHES BY LAST NAME */
// /* Last names in DB: fitzpatrick, washington, west */
// router.get('/helper-last-name', function(req, res) {
//     Application.findLastName("West", function(err, docs) {
//         if (err) console.error(err);
//         console.log(docs);
//         res.json(docs);
//     })
// });
//
// /* USING HELP QUERY FROM /mongoose/read-helpers.js */
// /* FINDS APPLICATIONS WITH DOB >= GIVEN DATE */
// router.get('/helper-dob-gte', function (req, res) {
//     var DOB = "2000, 1, 01";
//     Application.findDob(DOB, function(req, res) {
//         if (err) console.error(err);
//         console.log(docs);
//         res.json(docs);
//     })
// });
//
// /* NEW */
// router.get('/new', function(req, res) {
//     res.render('rest-new');
// });
//
// /* INSERT */
// router.post('/insert_user', function(req, res) {
//     // get the db instance
//     var db = req.db;
//
//     // get POST values from html page
//     var building = req.body.a_building;
//     var coord1 = req.body.a_coord_1;
//     var coord2 = req.body.a_coord_2;
//     var street = req.body.a_street;
//     var zip = req.body.a_zip;
//     var borough = req.body.borough;
//     var cuisine = req.body.cuisine;
//     var name = req.body.name;
//     var restid = req.body.restaurant_id;
//
//     console.log('POST VALUES: ' + '\n' + building + '\n' + coord1 + '\n' + coord2
//         + '\n' + street + '\n' + zip + '\n' + borough + '\n' + cuisine + '\n' +
//         name  + '\n' + restid + '\n');
//
//     var restCollection = db.get("restaurants");
//     restCollection.insert(
//         {
//             "address": {
//                 "building": building,
//                 "coord": [ coord1, coord2 ],
//                 "street": street,
//                 "zipcode": zip
//             },
//             "borough": borough,
//             "cuisine": cuisine,
//             "grades": [
//                 { "date": { "$date": 1393804800000 }, "grade": "A", "score": -1 },
//             ],
//             "name": name,
//             "restaurant_id": restid
//         }
//     );
//
//     res.send("Insert a new rest (C)");
// });

module.exports = router;
