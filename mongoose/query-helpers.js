var mongoose = require('mongoose');
var ApplicationSchema = require('../models/application');

// Return all documents in the application schema
ApplicationSchema.findAllDocuments = function(callback) {
    return this.find({

    }, callback);
};

// Return all documents that match a last name
// TODO: Currently the search function is case-sensitive, needs to be case insensitive
ApplicationSchema.findLastName = function(last_name, callback) {
    // last_name = String(last_name);
    return this.find({
        last_name: last_name
    }, callback);
};

// TODO: Create query for applications in date range

// TODO: Create query to return applications based on 'Application.status'

// TODO: Create query to return approved/denied applications

// TODO: Create query to return applications based on location -- 5 quadrants? Town? City? Zip?