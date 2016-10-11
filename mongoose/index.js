// Load config file to get URL, username, password, etc
var config = require('../config');

// Import the mongoose module
var mongoose = require('mongoose');

/* PULL IN SENSITIVE INFORMATION FROM config.js */
// Local URL, connects EC2 instance to local mongod
var local_url = 'mongodb://127.0.0.1:27017/test';
var remote_url = config.ec2.public_ip;
var username = config.mongo.username;
var password = config.mongo.password;
var db_name = config.mongo.db.test;

console.log('in mongoose/index.js');
var options = {
    user: username,
    pass: password
};
var uri = 'mongodb://' + remote_url + '/' + db_name;

// Connect to the URL
mongoose.connect(uri, options);

// Nothing needs to be exported, simple use "  require('<path>/mongoose')  "
module.exports = mongoose;