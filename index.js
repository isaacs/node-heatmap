var convert = require('color-convert');

if (process.argv) {
    var Canvas = (require)('canvas');
}

function createCanvas (width, height) {
    if (typeof Canvas !== 'undefined') {
        return new Canvas(width, height);
    }
    else {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        return canvas;
    }
}

var exports = module.exports = function (canvas) {
    if (typeof canvas !== 'object') {
        canvas = createCanvas(arguments[0], arguments[1]);
    }
    return new Heat(canvas)
};

function Heat (canvas) {
    this.canvas = canvas;
    this.alphaCanvas = createCanvas(canvas.width, canvas.height);
}

Heat.prototype.addPoint = function (x, y) {
    var ctx = this.alphaCanvas.getContext('2d');
    var radius = 20;
    
    var g = ctx.createRadialGradient(x, y, 0, x, y, radius);
    var a = 1 / 10;
    
    g.addColorStop(0, 'rgba(255,255,255,' + a + ')');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    
    ctx.fillStyle = g;
    ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    
    return this;
};

Heat.prototype.draw = function () {
    var width = this.canvas.width;
    var height = this.canvas.height;
    var ctx = this.alphaCanvas.getContext('2d');
    
    var values = ctx.getImageData(0, 0, width, height);
    var heat = ctx.createImageData(width, height);
    
    for (var i = 0; i < values.data.length; i += 4) {
        var v = values.data[i+3];
        if (v > 5) {
            var rgb = convert.hsl2rgb(values.data[i+3] / 255 * 359, 100, 50);
            heat.data[i] = rgb[0];
            heat.data[i+1] = rgb[1];
            heat.data[i+2] = rgb[2];
            heat.data[i+3] = 255;
        }
    }
    
    this.clear();
    this.canvas.getContext('2d').putImageData(heat, 0, 0);
    return this;
};

Heat.prototype.clear = function () {
    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = null;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    return this;
};
