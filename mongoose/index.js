// TODO: Create config file
// Load config file to get URL, username, password, etc
// var config = require("./config");

// Import the mongoose module
var mongoose = require('mongoose');

// Stored URLs, swap as needed before running the app
var test_url = 'mongodb://127.0.0.1:27017/rest';
var live_url = 'mongodb://127.0.0.1:27017/test';

// Connect to the URL
mongoose.connect(live_url);

// Nothing needs to be exported, simple use "  require('<path>/mongoose')  "