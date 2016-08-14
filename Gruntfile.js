'use strict';

module.exports = function(grunt)
{
    var jit = require('jit-grunt')(grunt, {
        list_documentation: 'grunt/strip-modules.js',
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        path: {
            grunt: 'grunt',
            config: 'grunt/config',
            resources: 'resources',
            assets: 'resources/assets',
            styles: 'styles',
            scripts: 'scripts',
            public: 'public',
            views: 'views',
            docs: 'docs'
        },
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['<%= path.assets %>/<%= path.styles %>/**/**/*.scss'],
                tasks: ['styles'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['<%= path.assets %>/<%= path.scripts %>/**/*.js'],
                tasks: ['browserify:scripts']
            },
            // markdown: {
            //     files: ['<%= path.wiki %>/**/*.md'],
            //     tasks: ['docs']
            // }
        },
        concurrent: require('./grunt/concurrent'),
        php: require('./grunt/php'),
        sass: require('./grunt/sass'),
        postcss: require('./grunt/postcss'),
        cssmin: require('./grunt/cssmin'),
        clean: require('./grunt/clean'),
        browserify: require('./grunt/browserify'),
        uglify: require('./grunt/uglify'),
        markdown: require('./grunt/markdown'),
        concat: require('./grunt/concat'),
        copy: require('./grunt/copy'),

    });

    grunt.registerTask('serve', ['concurrent:serve']);
    grunt.registerTask('styles', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('scripts', ['browserify', 'uglify']);
};