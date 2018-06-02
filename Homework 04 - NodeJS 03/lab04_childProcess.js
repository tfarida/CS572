
const fs = require('fs');
var path = require('path');

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