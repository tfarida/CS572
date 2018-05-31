var zlib = require('zlib');
var fs = require('fs');

// var gzip = zlib.createGzip();
// var r = fs.createReadStream('./file_toZip.docx');
// var w = fs.createWriteStream('./mygzipfile.docx.gz');
// r.pipe(gzip).pipe(w);

var unzip = zlib.createGunzip();
var s = fs.createReadStream('./mygzipfile.docx.gz');
var d = fs.createWriteStream('./myunzipfile.docx');
s.pipe(unzip).pipe(d);