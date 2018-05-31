var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var rs= fs.createReadStream('./image_big_paper_1.jpg').pipe(res);   
}).listen(1337, '127.0.0.1');