'use strict';

var postcss = {
    options: {
        map: true,
        processors: [
            require('autoprefixer')({
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 9']
            })
        ]
    },
    dist: {
        files: {
            '<%= path.public %>/<%= path.styles %>/main.css': '<%= path.public %>/<%= path.styles %>/main.css'
        }
    }
};

module.exports = postcss;