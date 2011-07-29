var fs = require('fs');
var heatmap = require('./');

var c = heatmap(500,500);
var buf = c.toBuffer();
fs.writeFileSync('out.png', buf);
