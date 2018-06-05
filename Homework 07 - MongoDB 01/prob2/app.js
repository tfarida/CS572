//2) write Node app using Express that will read the above message from MongoDB
//, decrypt the message (use crypto). Its encrypted with aes256 algorithm 
//and the following key: asaadsaad - DONE
//3) display the decrypted message in the browser using route (/secret) - DONE
//4) Upload your code to github and submit your link in Sakai

var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var secretsRouter = require('./routes/secrets');
const logger = require('morgan');
//const validator =  require('express-validator');
//const cors = require('cors');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//app.use(express.urlencoded({ extended: true }));
//app.use(validator());
//app.use(cors());

app.use('/', indexRouter);
app.use('/secret', secretsRouter);

var port = 3000;
app.listen(port, function(){
  console.log('Server is running on port %s', port);
});

