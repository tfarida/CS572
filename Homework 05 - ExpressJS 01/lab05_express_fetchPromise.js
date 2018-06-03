const express = require('express');
const fetch  = require('node-fetch');

var port = 3000;
var app = express();
app.enable('case sensitive routing');   //your app should be case sensitive
app.set('strict routing', true);        //your app should be strict
app.set('x-powered-by', false); //your app should not revealing the framework name to clients

app.get('/', function(req, res){
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('Hi');
    res.end();
});

app.get('/users', function(req, res, next) {
    //res.send('respond with a resource');
    fetch('http://jsonplaceholder.typicode.com/users/')
      .then(data => data.json())
      .then(json => {res.send(json)}) 
      .catch(err => {console.log(err)}) ;   
});


app.listen(port, function(){
    console.log('Server is running on port %s', port);
});