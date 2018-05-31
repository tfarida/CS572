var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var img = fs.readFileSync('./image_big_paper_1.jpg');
    res.writeHead(200, {'Content-Type':'image/jpg'});
    res.end(img,'binary');
    //res.end('Hello World\n');
}).listen(1337, '127.0.0.1');