var zlib = require('zlib');
var fs = require('fs');
var path = require('path');

var unzip = zlib.createGunzip();
var r = (fileName) => fs.createReadStream(path.join(__dirname, 'files', './'+fileName));
var w = (fileName) => fs.createWriteStream(path.join(__dirname, 'results', './'+fileName));

var src = 'AlgLab02.docx.gz';
var dest = src.substr(0,src.length-3);
r(src).pipe(unzip).pipe(w(dest));

// var src = 'IMG_5084.JPG.gz';
// var dest = src.substr(0,src.length-3);
// r(src).pipe(unzip).pipe(w(dest));