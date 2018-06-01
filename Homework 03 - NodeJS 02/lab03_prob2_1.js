var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
    var start = Date.now();
    var img = fs.readFileSync(path.join(__dirname, 'images', './image_big_padang_IMG_9800.JPG'));
    res.writeHead(200, {'Content-Type':'image/jpg'});
    res.end(img,'binary');
    var now = Date.now();
    console.log(now-start);
}).listen(1337, '127.0.0.1');