'use strict';

var sass = {
    options: {
        indentType: 'tab',
        indentWidth: 1,
        outputStyle: 'expanded',
        sourceMap: true,
        sourceMapContents: true
    },
    dist: {
        files: {
            '<%= path.public %>/<%= path.styles %>/main.css': '<%= path.assets %>/<%= path.styles %>/main.scss'
        }
    }
};

module.exports = sass;