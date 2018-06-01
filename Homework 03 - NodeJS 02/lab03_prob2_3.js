var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
    var start = new Date();
    var rs= fs.createReadStream(path.join(__dirname, 'images', './image_big_padang_IMG_9800.JPG')).pipe(res);
    var now = new Date();
    console.log(now-start);  
}).listen(1337, '127.0.0.1');