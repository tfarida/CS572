var express = require('express');
var router = express.Router();
const mongo = require("mongodb");

var MongoClient = mongo.MongoClient;

MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
    if(err) throw err;
    const db = client.db('testDB');
    db.collection('locations').createIndex({name:1}, function(err, result){
        if(err) throw err;
        //client.close();
    });
    db.collection('locations').createIndex({category:1}, function(err, result){
        if(err) throw err;
        //client.close();
    });
    db.collection('locations').createIndex({location:'2d'}, function(err, result){
        if(err) throw err;
        //client.close();
    })
    client.close();

});