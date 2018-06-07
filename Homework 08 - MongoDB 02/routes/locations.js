var express = require('express');
var router = express.Router();
const mongo = require("mongodb");

var MongoClient = mongo.MongoClient;

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
        if(err) throw err;
        const db = client.db('testDB');
        var query = {};        
        db.collection('locations').find(query).toArray(function(err, docsArr){
            res.send(JSON.stringify(docsArr));
            client.close(); 
        });
    });
});
var jsonParser = express.json();
router.post('/', jsonParser, function(req,res,next){
    console.log('req.body.name: '+req.body.name);
    
    req.assert('name', 'name is required').notEmpty();  
    req.assert('category', 'category is required').notEmpty();
    req.assert('location', 'location is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.send(JSON.stringify({errors:errors}));
      }
      else{
        MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
            if(err) throw err;
            const db = client.db('testDB');
            console.log('req.body.name: '+req.body.name);
            var doc = {name: req.body.name, category:req.body.category, location:req.body.location};       
            db.collection('locations').insert(doc, function(err, docInserted){
                res.send(JSON.stringify(docInserted));
                return client.close();
            }); 
        });        
      }
});
router.put('/', jsonParser, function(req, res, next){

    req.assert('name', 'name is required').notEmpty();  
    req.assert('category', 'category is required').notEmpty();
    req.assert('location', 'location is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
      res.send(JSON.stringify({errors:errors}));
    }
    else{
        MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
            if(err) throw err;
            const db = client.db('testDB');
            //console.log('req.body._id: '+req.body._id);
            
            var query = {_id: mongo.ObjectID(req.body._id)};
            var operator = {'$set': {
                name: req.body.name, category:req.body.category, location:req.body.location
            }};

            db.collection('locations').update(query, operator, function(err, numUpdated){
                if(err) throw err;
                res.send('Successfully updated' + numUpdated);
                return client.close();
            }); 
        });   
    }
    
});

router.delete('/',jsonParser,function(req, res, next){
    MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
            if(err) throw err;
            const db = client.db('testDB');
            //console.log('req.body._id: '+req.body._id);            
            var query = {_id: mongo.ObjectID(req.body._id)};            

            db.collection('locations').remove(query, function(err, removed){
                if(err) throw err;
                res.send(removed + ' docs removed');
                return client.close();
            }); 
        });   
    //res.send();
  });

module.exports = router;