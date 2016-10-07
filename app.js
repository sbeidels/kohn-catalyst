var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/search-1', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
    message: err.message,
    error: {}
  });
});


/////////////////////////////
// connect to server
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

// Uncomment this huge block to have the database return every item

// // 1. Define a search function
// var findRestaurants = function(db, callback) {
//     var cursor = db.collection('restaurants').find();
//     cursor.each(function (err, doc) {
//         assert.equal(err, null);
//         if (doc != null) {
//             console.log(doc);
//         } else {
//             callback;
//         }
//     });
// };
//
// // 2. Use the search function to print everything in the collection
// MongoClient.connect(url, function (err, db) {
//     assert.equal(null, err);
//     findRestaurants(db, function () {
//         db.close();
//     });
// });

// Use this block to find restaurants that score > 95 and have grade A
// 3. Let's refine our search
var findBestRestaurants = function(db, callback) {
    var cursor = db.collection('restaurants').find({
        "grades.score" : { $gt: 95 },
        "grades.grade" : "A"
    });
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log("\n- - - - - - - - - - - - - - - - -");
            console.log("\n- - - - - - - - - - - - - - - - -");
            console.log("\n- - - - - - - - - - - - - - - - -");
            console.log(doc);
        } else {
            callback;
        }
    });
};

// 4. Search for the best restaurants!
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    findBestRestaurants(db, function() {
        db.close();
    })
});



/////////////////////////////


module.exports = app;
