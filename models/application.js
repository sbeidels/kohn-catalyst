/*
This is the current APPLICATION FORM.
It is the form that a potential client would fill out when applying for aid.

Items on the left of the colon are database ID values.
Items on the right of the colon are the data types allowed.

Allowable types are:
String      Number
Date        Buffer
Boolean     Mixed
ObjectId    Array

ObjectId is similar to a primary key in a relationship based database.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var ApplicationSchema = Schema({
    _id:            ObjectId,
    owns_home:      Boolean,
    id:             Number,
    status:         String,         // TODO: determine concrete review status terms
    first_name:     String,
    last_name:      String,
    dob:            Date,
    marital_status: String,         // TODO: Confirm options is chosen from list
    spouse:         String,
    phone_number:   Number,         // TODO: Confirm max length = 10 integers
    address:        {
        number:     Number,
        street:     String,
        unit:       String,
        city:       String,
        state:      String,         // TODO: Validate it is a state or it in Oregon
        zip:        Number,         // TODO: Confirm max length = 5 integers
        country:    String          // TODO: Is country needed??
    },
    email:          String,         // TODO: Validate in form user@host.host
    driver_license: String,
    emergency_contact:  {
        name:       String,
        phone:      Number          // TODO: Validate max length = 10 integers
    },
    other_residents:{
        number:      Number,
        names:      [String],      // This is an array of strings
    },
    language:       String,         // TODO: Make user pick from list
    veteran:        Boolean
});

var Application = mongoose.model('Applications', ApplicationSchema);
module.exports = Application;