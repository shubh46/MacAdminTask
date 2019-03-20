"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var bcrypt = require('bcryptjs');
Promise.promisifyAll(mongoose);
var mongoose = require('mongoose');

var Products = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    cost: {
        type: Number,
        trim: true
    },
    size: {
        type: Number,
        trim: true
    },
    image: [{
        // type: String
    }],
    category: {
        type: String,
        trim: true
    },
    subcategory: {
        type: String,
        trim: true
    },
    created_on: {
        type: Date,
        default: new Date()
    },
}, { versionKey: false });

var Products = mongoose.model('Products', Products);
module.exports = Products;