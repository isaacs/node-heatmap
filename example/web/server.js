var connect = require('connect');
var app = connect.createServer();
app.use(connect.static(__dirname));

var browserify = require('browserify');
var bundle = browserify({
    entry : __dirname + '/main.js',
    filter : require('uglify-js'),
    watch : true
});

app.use(bundle);

app.listen(8080);
console.log('Listening on :8080');
