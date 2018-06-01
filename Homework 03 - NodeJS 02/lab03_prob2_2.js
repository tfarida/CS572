var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
    var start = new Date();
    var src = fs.createReadStream(path.join(__dirname, 'images', './image_big_padang_IMG_9800.JPG'));

    src.on('data', function(data){
        if(!res.write(data)){
            src.pause();
        }
    });

    res.on('drain', function(){
        src.resume();
    })

    src.on('end', function(){
        var now = new Date();
        console.log(now-start);
        res.end();
    })
}).listen(1337, '127.0.0.1');