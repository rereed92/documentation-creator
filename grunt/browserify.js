'use strict';

var browserify = {
    options: {
        browserifyOptions: {
            debug: true
        },
        transform: [
            [
                'babelify',
                {
                    sourceMap: true,
                    presets: ['es2015']
                }
            ]
        ]
    },
    scripts: {
        files: {
            '<%= path.public %>/<%= path.scripts %>/main.js': '<%= path.assets %>/<%= path.scripts %>/main.js',
        }
    },
};

module.exports = browserify;