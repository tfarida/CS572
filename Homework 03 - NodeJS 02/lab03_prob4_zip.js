var zlib = require('zlib');
var fs = require('fs');
var path = require('path');

var gzip = zlib.createGzip();
var r = (fileName) => fs.createReadStream(path.join(__dirname, 'files', './'+fileName));
var w = (fileName) => fs.createWriteStream(path.join(__dirname, 'results', './'+fileName));

var src = 'AlgLab02.docx';
var dest = src+'.gz';
r(src).pipe(gzip).pipe(w(dest));

// var src = 'IMG_5084.JPG';
// var dest = src+'.gz';
// r(src).pipe(gzip).pipe(w(dest));

//Error [ERR_STREAM_CANNOT_PIPE]: Cannot pipe, not readable
// var unzip = zlib.createGunzip();
// var dest2 = src;
// r(src).pipe(gzip).pipe(w(dest)).pipe(unzip).pipe(w(dest2));     