'use strict';

var cssmin = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            '<%= path.public %>/<%= path.styles %>/main.min.css': '<%= path.public %>/<%= path.styles %>/main.css'
        }
    }
};

module.exports = cssmin;