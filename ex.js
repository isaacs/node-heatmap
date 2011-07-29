var fs = require('fs');
var heatmap = require('./');

var heat = heatmap(500, 500, { radius : 50 });
for (var i = 0; i < 1000; i++) {
    var rho = Math.random() * 2 * Math.PI;
    var z = Math.pow(Math.random(), 2) * 250;
    
    var x = 250 + Math.cos(rho) * z;
    var y = 250 + Math.sin(rho) * z;
    
    heat.addPoint(x, y);
}
heat.draw();
fs.writeFileSync('out.png', heat.canvas.toBuffer());
