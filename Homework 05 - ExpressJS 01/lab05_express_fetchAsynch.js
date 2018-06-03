var express = require('express');
var fetch  = require('node-fetch');
const { from } = require('rxjs');

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

    fetchAsync('http://jsonplaceholder.typicode.com/users/')
    .then(data => res.send(data))
    //.then(data => console.log(data))
    .catch(err => console.log(err.message));

});

async function fetchAsync(url){
    try{
        console.log('Before fetch');
        //let response = await fetch(url);
        //let data = await response.json();
        let data = await(await fetch(url)).json(); //shorter codes from 2 commented lines above
        console.log('After fetch finish');
        return data;
    } catch(error){
        console.log(error);
    }
}

app.listen(port, function(){
    console.log('Server is running on port %s', port);
});