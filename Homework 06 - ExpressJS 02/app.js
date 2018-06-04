//handle all CRUD and use proper HTTP verbs to make it RESTful (GET, POST, PUT, DELETE), test it with Postman
//mimic your model grade as a class with Array data structure - DONE
//your API accepts/return JSON data  - DONE
//log all reqs to console using middleware morgan - DONE
// make sure you validate that certain fields are valid and non empty - DONE
// accept cros domain XHR reqs to your API - DONE

var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var gradesRouter = require('./routes/grades');
const logger = require('morgan');//log all reqs to console using middleware morgan
const validator =  require('express-validator');
const cors = require('cors');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(validator());
app.use(cors());

app.use('/', indexRouter);
app.use('/grades', gradesRouter);

var port = 3000;
app.listen(port, function(){
  console.log('Server is running on port %s', port);
});