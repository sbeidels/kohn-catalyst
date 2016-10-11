// TODO: Create config file
// Load config file to get URL, username, password, etc
var config = require('../config');

// Import the mongoose module
var mongoose = require('mongoose');

// Any logic can go here

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

console.log('after var options mongoose/index.js');

// Connect to the URL
mongoose.connect(uri, options);

console.log('after mongoose.connect mongoose/index.js');

// Nothing needs to be exported, simple use "  require('<path>/mongoose')  "
module.exports = mongoose;