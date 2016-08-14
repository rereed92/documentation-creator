'use strict';

var jquery = require('jquery');
var marked = require('marked');
var pygmentize = require('pygmentize-bundled');
var renderer = new marked.Renderer();

renderer.heading = function(body, no)
{
    return '<h' + no + ' class="heading heading--' + no + ' docs__heading docs__heading--' + no + '">' + body + '</h' + no + '>';
};

renderer.paragraph = function(body)
{
    return body = '<p>' + body + '</p>';
};

renderer.codespan = function(body)
{
    return '<code class="docs__code">' + body + '</code>';
};

renderer.list = function(body, ordered)
{
    var tag = ordered ? 'ol' : 'ul';

    return '<' + tag + ' class="list">' + body + '</' + tag + '>';
};

renderer.listitem = function(body)
{
    return '<li class="list__item">' + body + '</li>';
};

renderer.link = function(href, title, body)
{
    return '<a href="' + href + '" class="link link--body">' + body + '</a>';
};

renderer.table = function(header, body)
{
    return '<table class="docs__table">' + '<thead class="docs__table-header">' + header + '</thead>' + '<tbody class="docs__table-body">' + body + '</tbody></table>';
};

renderer.tablerow = function(content)
{
    return '<tr class="docs__table-row">' + content + '</tr>';
};

renderer.tablecell = function(content, flags)
{
    return '<td class="docs__table-cell">' + content + '</td>';
};

marked.setOptions({
    gfm: true,
    tables: true,
    renderer: renderer,
    highlight: function(code, lang, callback)
    {
        return require('highlight.js').highlightAuto(code).value;
    },
});

module.exports = marked;