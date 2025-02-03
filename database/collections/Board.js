'use strict';

const mongoose = require('mongoose');
const Thread = require('./Thread');

// MongoDB collection for Stocks
class Board {
    static _model;

    constructor(collectionName) {
        this._collectionName = collectionName || 'Board';
        this._model = mongoose.model(this._collectionName, this._schema);
    }

    _schema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        threads: {
            type: [Thread],
            default: []
        },
    })
}

module.exports = Board;