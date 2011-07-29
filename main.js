var $ = require('jquery-browserify');
var heatmap = require('./');

$(window).ready(function () {
    $(document.body).css('background-color', 'black');
    
    var canvas = $('<canvas>').attr({
        width : 500,
        height : 500
    }).appendTo(document.body);
    
    var heat = heatmap(canvas.get(0));
    heat
        .addPoint(100, 100, 30)
        .addPoint(400, 200, 80)
    ;
});
