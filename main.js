var $ = require('jquery-browserify');
var heatmap = require('./');

$(window).ready(function () {
    var canvas = $('<canvas>').attr({
        width : 500,
        height : 500
    });
    canvas.appendTo(document.body);
    
    heatmap(canvas.get(0));
});
