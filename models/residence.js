/*
This form holds data about the household to be worked on.

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

var residenceSchema = Schema({
    _id:                    ObjectId,
    // TODO: The 'id' field references the application.js model HOW?
    id:                     Number,
    // TODO: Handle 'other_residents'
    other_residents:        String,
    annual_income:          Number,
    other_assests:          Number,
    contribute_funds:       Number,
    family_financial_help:  Number,
    financial_assistance:   Number,
    type:                   String,
    ownership_length:       Number,  //could be string, for answers like 12 years, or 9 months (the question isn't asked in specific format years or months....)
    year_built:             Number,
    // TODO: Handle requested repairs
    requested_repairs:      String,
    heard_about_catalyst:   String,
    other_non_profits:      String,
    involved_w_other_org:   String,
    friends_family_help:    String,
    property_owner:         String,
    other_notes:            String
});