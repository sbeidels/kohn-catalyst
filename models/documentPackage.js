/*
 This file represents the doument schema for the entire DOCUMENT PACKAGE
 This is the master file for a client. Imagine it as a section in a filing
 cabinet that holds the application, financial, property, handle-it and
 project information. A 'folder' to hold a bunch of forms.

 This schema will create a mongoDB 'document'.
 The document will have values, like '_id', and sub-documents,
 like 'applications'.
 A sub-document can have sub-documents or values.

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

// TODO: Research 'index'ing a value in mongoose
// TODO: Research 'trim'ing a value in mongoose
// TODO: Add access tags as needed - docs = https://docs.mongodb.com/manual/reference/operator/aggregation/redact/
var DocumentPackageSchema = new Schema({
    _id:            ObjectId,
    status:         String,             // TODO: determine concrete review status terms

    advocate:       {
        is_advocate:    Boolean,
        name:           String,
        relationship:   String,
        phone:          Number,
        non_profit_name:String
    },

    application:    {
        owns_home:      Boolean,        // TODO: is this still asked/on the form?
        first_name:     String,
        last_name:      String,
        dob:            Date,           // TODO: split into subdocument and add security tags
        driver_license: String,         // TODO: split into subdocument and add security tags
        is_married:     Boolean,
        spouse:         String,
        phone:          {
            home:       Number,         // TODO: Validate max length = 10 integers
            cell:       Number,         // TODO: Validate max length = 10 integers
        },
        email:          String,         // TODO: Validate in form user@host.host
        address:        {
            line_1:     String,
            line_2:     String,
            city:       String,
            state:      String,         // TODO: Validate it is a state or it is in Oregon
            zip:        Number,         // TODO: Confirm max length = 5 integers
        },
        emergency_contact:  {
            name:           String,
            relationship:   String,
            phone:          Number      // TODO: Validate max length = 10 integers
        },
        other_residents:{
            count:      Number,        // other_residents.names[index], other_residents.ages[index] where index < other_residents.count
            name:      [String],       // This is an array of strings
            age:       [Number]        // This is an array of strings
        },
        veteran:        Boolean,
        language:       String,
        heard_about:    String,
        special_circumstances:  String
    },

    finance:    {
        mortgage_payment:       Number,
        mortgage_up_to_date:    Boolean,
        income:                 Number,
        assets:                 {
            count:              Number,
            name:               String,
            value:              Number
        },
        // TODO: could combine with other client_can_contribute
        client_can_contribute:  {
            value:              Boolean,
            amount:             Number,
        },
        // TODO: could combine with other associates_can_contribute
        associates_can_contribute:  {
            value:              Boolean,
            description:        String
        },
        requested_other_help:   {
            value:              Boolean,
            description:        String
        }
    },

    property:   {
        type:                   String,
        ownership_length:       Number,
        year_constructed:       Number,     // TODO: Validate as exact length = 4
        requested_repairs:      String,
        // TODO: could combine with other client_can_contribute
        client_can_contribute:  {
            value:              Boolean,
            description:        String
        },
        // TODO: could combine with other associates_can_contribute
        associates_can_contribute:  {
            value:              Boolean,
            description:        String
        },
    },

    recruitment:    {
        active_in_faith_group:  Boolean,
        organization:   {
            name:      String,
            contact:   String,
            phone:      Number              // TODO: Validate max length = 10 integers
        },

    },

    project:    {
        // TODO: Complete after application, status, etc -- THIS IS LAST
    }
});

var DocumentPackage = mongoose.model('DocumentPackage', DocumentPackageSchema);
module.exports = DocumentPackage;