var express = require('express');
var router = express.Router();
var mongoose = require('./../mongoose/index');

/* READ, UPDATE, DELETE */
router.get('/show', function(req, res) {
    // Static list is passed and referenced in rest-list.hbs
    // database.on('error', console.error.bind(console, 'connection error'));
    // database.once('open', console.log('connection successful'));

    var staticList = { restname: ['mcdonalds', 'burger king', 'subway'] };

    var dynamicList;

    res.render('rest-list', staticList, dynamicList);
});

/* NEW */
router.get('/new', function(req, res) {
    res.render('rest-new');
});

/* INSERT */
router.post('/insert_user', function(req, res) {
    // get the db instance
    var db = req.db;

    // get POST values from html page
    var building = req.body.a_building;
    var coord1 = req.body.a_coord_1;
    var coord2 = req.body.a_coord_2;
    var street = req.body.a_street;
    var zip = req.body.a_zip;
    var borough = req.body.borough;
    var cuisine = req.body.cuisine;
    var name = req.body.name;
    var restid = req.body.restaurant_id;

    console.log('POST VALUES: ' + '\n' + building + '\n' + coord1 + '\n' + coord2
        + '\n' + street + '\n' + zip + '\n' + borough + '\n' + cuisine + '\n' +
        name  + '\n' + restid + '\n');

    var restCollection = db.get("restaurants");
    restCollection.insert(
        {
            "address": {
                "building": building,
                "coord": [ coord1, coord2 ],
                "street": street,
                "zipcode": zip
            },
            "borough": borough,
            "cuisine": cuisine,
            "grades": [
                { "date": { "$date": 1393804800000 }, "grade": "A", "score": -1 },
            ],
            "name": name,
            "restaurant_id": restid
        }
    );

    res.send("Insert a new rest (C)");
});

module.exports = router;
