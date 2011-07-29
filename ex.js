var fs = require('fs');
var heatmap = require('./');

var heat = heatmap(500,500);
heat
    .addPoint(100, 100, 30)
    .addPoint(400, 200, 80)
    .addPoint(400, 250, 50)
    .addPoint(410, 240, 30)
    .addPoint(415, 240, 40)
    .addPoint(418, 240, 20)
    .addPoint(440, 200, 80)
;
fs.writeFileSync('out.png', heat.canvas.toBuffer());
