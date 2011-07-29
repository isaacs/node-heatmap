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
        var x = Math.random() * 500;
        var y = Math.random() * 500;
        var value = Math.random();
        heat.addPoint(x, y, value);
    }
    
    heat.draw();
});
