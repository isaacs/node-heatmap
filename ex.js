var fs = require('fs');
var heatmap = require('./');

var heat = heatmap(500,500);
heat
    .addPoint(100, 100)
    .addPoint(400, 200)
    .addPoint(400, 250)
    .addPoint(410, 240)
    .addPoint(415, 240)
    .addPoint(418, 240)
    .addPoint(440, 200)
    .draw()
;
fs.writeFileSync('out.png', heat.canvas.toBuffer());
