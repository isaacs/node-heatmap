var $ = require('jquery-browserify');
var heatmap = require('./');

$(window).ready(function () {
    $(document.body).css('background-color', 'black');
    
    var canvas = $('<canvas>').attr({
        width : 500,
        height : 500
    }).appendTo(document.body);
    
    var heat = heatmap(canvas.get(0));
    
    for (var i = 0; i < 1000; i++) {
        var rho = Math.random() * 2 * Math.PI;
        var z = Math.pow(Math.random(), 2) * 250;
        
        var x = 250 + Math.cos(rho) * z;
        var y = 250 + Math.sin(rho) * z;
        
        heat.addPoint(x, y);
    }
    
    heat.draw();
});
