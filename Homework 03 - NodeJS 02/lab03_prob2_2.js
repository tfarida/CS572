var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var src = fs.createReadStream('./image_big_paper_1.jpg');

    src.on('data', function(data){
        if(!res.write(data)){
            src.pause();
        }
    });

    res.on('drain', function(){
        src.resume();
    })

    src.on('end', function(){
        res.end();
    })
}).listen(1337, '127.0.0.1');