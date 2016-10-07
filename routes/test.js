var express = require('express');
var router = express.Router();

/* READ, UPDATE, DELETE */
router.get('/show', function(req, res) {
    // Get the database
    var db = req.db;

    // Fetch the collection 'restaurants'
    var restCollection = db.get("restaurants");

    // collection.find() returns all items in the db
    restCollection.find({}, {}, function (err, docs) {
        assert.equal(err, null);
        res.render('rest-list', {
           'restList' : docs
       });
    });

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
