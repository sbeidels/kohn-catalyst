// var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var ApplicationSchema = Schema({
    _id:            ObjectId,
    id:             Number,
    status:         String,         // TODO: determine concrete review status terms
    first_name:     String,
    last_name:      String,
    dob:            Date,
    marital_status: String,         // TODO: Confirm options is chosen from list
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
        phone:      Number         // TODO: Validate max length = 10 integers
    },
    language:       String,         // TODO: Make user pick from list
    veteran:        Boolean
});

var Application = mongoose.model('Application', ApplicationSchema);
module.exports = Application;