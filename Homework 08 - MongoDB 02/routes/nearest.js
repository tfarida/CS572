var express = require('express');
var router = express.Router();
const mongo = require("mongodb");

var MongoClient = mongo.MongoClient;

var jsonParser = express.json();
router.get('/', function(req, res, next) {

        MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
          if(err) throw err;
          const db = client.db('testDB');
          var currentLong = -91.9665342;
          var currentLat = 41.017654;                    
          var query = {name: {$regex: ""+req.query.name+""}, category: {$regex: ""+req.query.category+""}, location:{$near:[currentLong, currentLat]}};
          if(req.query.name ==  null || req.query.name == ''){
            query = {category: {$regex: ""+req.query.category+""}, location:{$near:[currentLong, currentLat]}};
          }
          
          db.collection('locations').find(query).limit(3).toArray(function(err, docsArr){
              res.send(JSON.stringify(docsArr));
              client.close();
          });
        });      
  });

module.exports = router;