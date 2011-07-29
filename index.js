var convert = require('color-convert');

if (process.argv) {
    var Canvas = (require)('canvas');
}

var exports = module.exports = function (canvas) {
    if (typeof canvas !== 'object') {
        canvas = new Canvas(arguments[0], arguments[1]);
    }
    return new Heat(canvas)
};

function Heat (canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
}

Heat.prototype.addPoint = function (x, y, value) {
    var maximum = 100;
    var ctx = this.context;
    var size = 100;
    
    var g = ctx.createRadialGradient(x, y, 10, x, y, size / 2);
    
    g.addColorStop(0, rgb(value / maximum, 1));
    g.addColorStop(1, rgb(value / maximum, 0));
    
    ctx.fillStyle = g;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
    
    return this;
};

function rgb (v, a) {
    return 'rgba(' + convert.hsl2rgb((1 - v) * 360, 100, 50)
        .concat(Math.floor(a * 255))
        + ')'
    ;
}
