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
    var radius = 50;
    
    var g = ctx.createRadialGradient(x, y, 0, x, y, radius);
    g.addColorStop(0, rgb(value / maximum, 1));
    g.addColorStop(0.5, rgb(value / maximum - 1 / 12, 1));
    g.addColorStop(0.8, rgb(value / maximum - 1 / 6, 0.2));
    g.addColorStop(1, rgb(value / maximum - 1 / 3, 0));
    
    ctx.fillStyle = g;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    
    return this;
};

function rgb (v, a) {
    var theta = Math.min(270, Math.max(0, (1 - v) * 360));
    var rgba = convert.hsl2rgb(theta, 100, 50).concat(a);
    return 'rgba(' + rgba.join(',') + ')';
}
