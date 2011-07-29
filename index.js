var mrcolor = require('mrcolor');

if (process.argv) {
    var Canvas = (require)('canvas');
}

var exports = module.exports = function (canvas) {
    if (typeof canvas !== 'object') {
        canvas = new Canvas(arguments[0], arguments[1]);
    }
    
    var ctx = canvas.getContext("2d");
    var g = ctx.createRadialGradient(250, 250, 20, 250, 250, 150);
    
    var colors = mrcolor.take(6).forEach(function (c, i) {
        var a = Math.floor(255 * (1 - i / 5));
        var rgba = c.rgb().concat(a).join(',');
        g.addColorStop(i / 5, 'rgba(' + rgba + ')');
    });
    
    ctx.fillStyle = g;
    ctx.fillRect(100, 100, 300, 300);
    
    return canvas;
};
