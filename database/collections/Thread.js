'use strict';

const mongoose = require('mongoose');

// MongoDB collection for Stocks
class Thread {
    static _model;

    constructor(collectionName) {
        this._collectionName = collectionName || 'Thread';
        this._model = mongoose.model(this._collectionName, this._schema);
    }

    _schema = new mongoose.Schema({
        text: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        reported: {
            type: Boolean,
            default: []
        },
        createdOn: {
            type: Date,
            default: new Date()
        },
        bumpedOn: {
            type: Date,
            default: new Date()
        },
        replies: {
            type: [Thread],
            default: []
        },
    })
}

module.exports = Thread;