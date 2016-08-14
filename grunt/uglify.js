'use strict';

var uglify = {
    options: {
        banner: '\/\* <%= pkg.name %> - version <%= pkg.version %> \*\/',
        sourceMap: true
    },
    scripts: {
        files: {
            '<%= path.public %>/<%= path.scripts %>/main.min.js': '<%= path.public %>/<%= path.scripts %>/main.js'
        }
    },
};

module.exports = uglify;