var $ = require('jquery-browserify');
var heatmap = require('./');

$(window).ready(function () {
    var canvas = $('<canvas>').attr({
        width : 500,
        height : 500
    }).appendTo(document.body);
    
    var heat = heatmap(canvas.get(0));
    heat
        .addPoint(100, 100, 30)
        .addPoint(400, 200, 80)
        .addPoint(400, 250, 50)
        .addPoint(410, 240, 30)
        .addPoint(415, 240, 40)
        .addPoint(418, 240, 20)
    ;
});
