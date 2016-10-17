// Load config file to get URL, username, password, etc
var config = require('../config');

// Import the mongoose module
var mongoose = require('mongoose');

/* PULL IN SENSITIVE INFORMATION FROM config.js */
// Local URL, connects EC2 instance to local mongod
var local_url = 'mongodb://127.0.0.1:27017/test';
// Connects to the public IP of the server hosting the database
var remote_url = config.ec2.public_ip;
// Username and password of a user that has read and write permissions
var username = config.mongo.username;
var password = config.mongo.password;
// Name of the database to use
var db_name = config.mongo.db.test;

var options = {
    user: username,
    pass: password
};
var uri = 'mongodb://' + remote_url + '/' + db_name;

// Connect to the URL
mongoose.connect(uri, options);
mongoose.connection.on('error', console.error.bind(console, 'Connection Error : '));
mongoose.connection.once('open', function () {
    console.log('[ DATABASE ] Connection to database ok!');
});

// Nothing needs to be exported, simple use "  require('<path>/mongoose')  "
module.exports = mongoose;