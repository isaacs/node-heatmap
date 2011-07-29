var heatmap = require('heatmap');

var heat = heatmap(500, 500, { radius : 30 });
for (var i = 0; i < 5000; i++) {
    var rho = Math.random() * 2 * Math.PI;
    var z = Math.pow(Math.random(), 2) * 200;
    
    var x = 250 + Math.cos(rho) * z;
    var y = 250 + Math.sin(rho) * z;
    
    heat.addPoint(x, y);
}
heat.draw();

var fs = require('fs');
fs.writeFileSync('blob.png', heat.canvas.toBuffer());
