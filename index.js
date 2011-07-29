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
    this.points = [];
    this.radius = 20;
    this.maximum = 0;
}

Heat.prototype.addPoint = function (x, y, value, radius) {
    this.points.push({ x : x, y : y, value : value, radius : radius });
    if (value > this.maximum) this.maximum = value;
    return this;
};

Heat.prototype.draw = function () {
    var self = this;
    
    self.points
        .sort(function (a, b) {
            return a.value - b.value
        })
        .forEach(function (pt) {
            self.drawPoint(pt);
        })
    ;
    return self;
};

Heat.prototype.drawPoint = function (x, y, value, radius) {
    if (typeof x === 'object') {
        var pt = x;
        x = pt.x, y = pt.y, value = pt.value, radius = pt.radius;
    }
    
    var ctx = this.context;
    if (!radius) radius = this.radius;
    
    var g = ctx.createRadialGradient(x, y, 0, x, y, radius);
    g.addColorStop(0, rgb(value / this.maximum, 1));
    g.addColorStop(0.5, rgb(value / this.maximum, 1));
    g.addColorStop(0.85, rgb(value / this.maximum - 1 / 12, 0.2));
    g.addColorStop(1, rgb(value / this.maximum - 1 / 6, 0));
    
    ctx.fillStyle = g;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    
    return this;
};

function rgb (v, a) {
    var theta = Math.min(270, Math.max(0, (1 - v) * 360));
    if (v < 0.5) a *= Math.pow(2 * v, 2);
    
    var rgba = convert.hsl2rgb(theta, 100, 50).concat(a);
    return 'rgba(' + rgba.join(',') + ')';
}
