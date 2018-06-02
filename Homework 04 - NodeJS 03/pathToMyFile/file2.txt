//lab04 prob01: create a Reactive HTTP server that serves file whe url query parameter is passed with the request.
//the file path is provided in the URL like this
//http://localhost:4000/?url=path/to/my/file.txt
//your logic in reading file should be in a separate child process. 
//hint: main and child must communicate, so use fork

const {Subject} = require('rxjs');
const subject  = new Subject();
const http = require('http');
const {fork} = require('child_process');

function serveFile(reqres){
    //the file path is provided in the URL like this
    //http://localhost:4000/?url=path/to/my/file.txt
    var url = reqres.req.url;
    console.log("url: "+url);
    var path_file = url.substr(6,url.length);
    console.log("urls path_file: "+path_file);

    //your logic in reading file should be in a separate child process.
    const childProcess = fork('lab04_childProcess.js');
    childProcess.send(path_file);
    childProcess.on('message', data => {
        if(data != 'END'){
            reqres.res.write(data);
        }
        else{
            reqres.res.end();
        }
        
    });
}

subject.subscribe(serveFile)

http.createServer((req, res)=> {
    subject.next({req:req, res:res});
}).listen(1337, '127.0.0.1');

