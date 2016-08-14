'use strict';

var concurrent = {
    serve: {
        tasks: ['php', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    }
};

module.exports = concurrent;