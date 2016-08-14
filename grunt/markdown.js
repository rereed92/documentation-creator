'use strict';

var fs = require('fs');

var markdown = {
    modules: {
        files: [
            {
                expand: true,
                cwd: '<%= path.wiki %>/modules',
                src: '**/*.md',
                dest: '<%= path.public %>/<%= path.docs %>/modules',
                ext: '.html'
            }
        ],
        options: {
            template: '<%= path.config %>/markdown.jst',
            markdownOptions: require('./config/renderer.config.js'),
            preCompile: function (src)
            {
                let output = src;
                let regexCode = /```([\s]*)html([\s\S]*?)```/g;
                let regexEmptyLines = /^\s*\n/gm;
                let regexImages = /\/images\//g;
                let codes = output.match(regexCode);

                if (codes)
                {
                    codes.map(function(code)
                    {
                        let example = code.toString()
                                            .replace(regexEmptyLines, '')
                                            .replace('``` html', '')
                                            .replace('```html', '')
                                            .replace('```', '')
                                            .replace(regexImages, '/images/');
                        let index = output.indexOf(code);

                        output = output.substring(0, index) + example + output.substring(index);

                        return output;
                    });
                }

                return output;
            },
            postCompile: function (src, context)
            {
                let sprite = fs.readFileSync(`${__dirname}/../public/svg/sprite.svg`).toString();
                let output = sprite + src;
                let regexTitle = /<h2 class="heading heading--2 docs__heading docs__heading--2">([\w|\d|\s]+)<\/h2>/g;
                let titles = output.match(regexTitle);

                if (titles)
                {
                    titles.map(function(title)
                    {
                        let regexHeading = /<h2 class="heading heading--2 docs__heading docs__heading--2">(.+)<\/h2>/;
                        let heading = title.match(regexHeading);
                        let newHeading = `<h2 class="heading heading--2 docs__heading docs__heading--2 docs__heading--module">${heading[1]}</h2>`;
                        let example = title.toString().replace(regexHeading, newHeading);

                        output = output.replace(title, example);

                        return output;
                    });
                }

                return output;
            }
        }
    }
};

module.exports = markdown;