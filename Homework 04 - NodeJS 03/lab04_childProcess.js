
const fs = require('fs');
var path = require('path');

const readingFile = (path_file)=> {
    console.log('path_file: '+path_file);   
    //var src = fs.createReadStream(path.join(__dirname, 'images', './image_big_padang_IMG_9800.JPG'));
    var src = fs.createReadStream(path_file);
    src.on('data', function(data){
        process.send(data);
    });

    src.on('end', function(){
        process.send('END');
    })

};

process.on('message', (msg) => {
    console.log('msg: '+msg);
    var path_file = msg;
    path_file = path.join(__dirname, '/'+msg)
    var src = fs.createReadStream(path_file);
    src.on('data', function(data){
        var part = data.toString();
        process.send(part);
    });
    src.on('end', function(){
        process.send('END');
    })
});