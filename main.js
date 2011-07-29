var $ = require('jquery-browserify');
var heatmap = require('./');

$(window).ready(function () {
    $(document.body).css('background-color', 'black');
    
    var canvas = $('<canvas>').attr({
        width : 500,
        height : 500
    }).appendTo(document.body);
    
    var heat = heatmap(canvas.get(0));
    
    for (var i = 0; i < 100; i++) {
        var rx = 2 * Math.random() - 1;
        var x = (1 + (rx * rx) * (rx < 0 ? -0.5 : 0.5)) * 500;
        
        var ry = 2 * Math.random() - 1;
        var y = (1 + (ry * ry) * (ry < 0 ? -0.5 : 0.5)) * 500;
        
        heat.addPoint(x, y);
    }
    
    heat.draw();
});
