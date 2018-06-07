//1. Write rest express API that use mongodb to create/update/read/delete location points. 
//location JSON object: {name, category, location:[longitude, latitude]}  -- DONE
//1. Find some locs around MUM campus and use Postman to add them to your mongodb coll. 
//(input output must be in JSON format) -- DONE
//2. Add necessary indexes to search the geospacial locs  -- DONE
//3. Write API that will locate the nearest 3 points to your loc (lat: 41.017654, long: -91.9665342)
//your search criteria may include a mandatory category and an optional location name  -- DONE
 

var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var locationsRouter = require('./routes/locations');
var nearestRouter = require('./routes/nearest');

const logger = require('morgan');
const validator =  require('express-validator');
//const cors = require('cors');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(validator());
//app.use(cors());

app.use('/', indexRouter);
app.use('/locations', locationsRouter);
app.use('/nearest', nearestRouter);

var port = 3000;
app.listen(port, function(){
  console.log('Server is running on port %s', port);
});

