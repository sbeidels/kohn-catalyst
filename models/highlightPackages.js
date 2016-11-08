/*
    //TODO: write a new description
 Highlighters are nice.

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

var HighlightPackageSchema = new Schema({
    created:        Date,
    updated:        { type: Date, default: Date.now},
    application:    {
        name:   { type: Boolean, default: false },
        phone:  {
            preferred: { type: Boolean, default: false }
        }
    }
});

var DocumentPackage = mongoose.model('DocumentPackage', DocumentPackageSchema);
module.exports = DocumentPackage;