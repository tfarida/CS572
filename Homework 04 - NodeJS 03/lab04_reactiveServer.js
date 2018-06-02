const {Subject} = require('rxjs');
const subject  = new Subject();
const http = require('http');
const {fork} = require('child_process');

function serveFile(reqres){
    var path_to_myFile = reqres.req.url.path;

    const childProcess = fork('lab04_childProcess.js');
    // childProcess.send('start');
    // childProcess.on('message', data => {
    //    reqres.res.write(data);
    // })
}

subject.subscribe(serveFile)

http.createServer((req, res)=> {
    subject.next({req:req, res:res});
}).listen(1337, '127.0.0.1');

