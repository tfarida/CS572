var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');

//var msg = null;
//console.dir(msg);
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var algorithm = 'aes256'; 
  var key = 'asaadsaad';

  MongoClient.connect('mongodb://127.0.0.1/testDB', function(err, client){
    if(err) throw err;
    const db = client.db('testDB');

    db.collection('homework7').findOne({}, function(err, doc){
        if(err) throw err;
       //msg = doc;
        console.dir(doc.message);
        var secretCode = doc.message;
        var decipher = crypto.createDecipher(algorithm,key)
        var dec = decipher.update(secretCode,'hex','utf8');
        dec += decipher.final('utf8');
        //console.dir(dec);
        res.send(dec);
        client.close();
    });
    //console.log('Called findOne');

});
});

module.exports = router;