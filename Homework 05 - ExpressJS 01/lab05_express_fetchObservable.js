const express = require('express');
const fetch  = require('node-fetch');
const {from} = require('rxjs');
const {Observable} = require('rxjs');

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
    const observable = Observable.create(observer => {
        fetch('http://jsonplaceholder.typicode.com/users/')
          .then(response => response.json()) 
          .then(data => {
            observer.next(data);
            observer.complete();
          })
          .catch(err => observer.error(err));
      });
      
      observable.subscribe(data => res.send(data));

});


app.listen(port, function(){
    console.log('Server is running on port %s', port);
});