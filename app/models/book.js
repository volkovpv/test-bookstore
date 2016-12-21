/**
 * Created by petr on 12.2016.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookSchema = new Schema(
    {
        title       : { type: String, required: true },
        author      : { type: String, required: true },
        year        : { type: Number, required: true },
        pages       : { type: Number, required: true, min: 1 },
        createdAt   : { type: Date  , default : Date.now },
    },
    {
        versionKey  : false
    }
);

BookSchema.pre('save', next => {
    let now = new Date();
    if(!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model('book', BookSchema);