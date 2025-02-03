'use strict';

const Board = require('../collections/Board');

/**
 * A king of interface made to implement all Basics operations 
 * on Boards in database
 */
class BoardRepository {
    static model = new Board()._model;

    constructor() { }

    async find(filter) {
        return await BoardRepository.model.find(filter);
    }

    async create(item) {
        return await (new BoardRepository.model(item)).save();
    }

    async update(item) {
        item.markModified('replies');
        return await (new BoardRepository.model(item)).save();
    }

    async findBySymbol(_symbol) {
        return await BoardRepository.model.findOne({ symbol: _symbol }).exec();
    }

    async deleteAll() {
        return await BoardRepository.model.deleteMany({});
    }

}

module.exports = BoardRepository;