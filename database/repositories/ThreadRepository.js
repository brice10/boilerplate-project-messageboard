'use strict';

const Thread = require('../collections/Thread');

/**
 * A king of interface made to implement all Basics operations 
 * on Threads in database
 */
class ThreadRepository {
    static model = new Thread()._model;

    constructor() { }

    async find(filter) {
        return await ThreadRepository.model.find(filter);
    }

    async create(item) {
        return await (new ThreadRepository.model(item)).save();
    }

    async update(item) {
        item.markModified('replies');
        return await (new ThreadRepository.model(item)).save();
    }

    async findBySymbol(_symbol) {
        return await ThreadRepository.model.findOne({ symbol: _symbol }).exec();
    }

    async deleteAll() {
        return await ThreadRepository.model.deleteMany({});
    }

}

module.exports = ThreadRepository;