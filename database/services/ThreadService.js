'use strict';

const ThreadRepository = require('../repositories/ThreadRepository');

/**
 * A king of interface made to implement all advanced operations 
 * on Threads before saving them in database
 */
class ThreadService {

    ThreadRepository;

    constructor() {
        this.ThreadRepository = new ThreadRepository();
    }

    async find(filter) {
        return await this.ThreadRepository.find(filter);
    }

    async create(requestBody) {
        return await this.ThreadRepository.create(requestBody)
    }

    async save(threadSymbol, like, ip) {
        
        let threadFound = await this.ThreadRepository.findBySymbol(threadSymbol);
        if (!threadFound) 
            return await this.create({ symbol: threadSymbol, likes: like? [ip]: ip });

        if (like && !threadFound.likes.includes(ip)) {
            threadFound.likes.push(ip);
            console.log('threadFound: ', threadFound);
            return await threadFound.save();
        }
        return threadFound;
    }

    async deleteAll() {
        await this.ThreadRepository.deleteAll();
    }

}

module.exports = ThreadService;