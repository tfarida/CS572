var express = require('express');
var router = express.Router();

var gradeConstructor = require('../grade'); //new Grade();
var grade = new gradeConstructor();

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(grade.getGrades()));  
});
router.get('/:id', function(req, res, next) {
    res.send(JSON.stringify(grade.getGrade(req.params.id)));
});

var jsonParser = express.json();

router.post('/', jsonParser, function(req, res, next){
  //console.log('req.body.name: '+req.body.name)
  req.assert('id', 'id is required').notEmpty();
  req.assert('name', 'name is required').notEmpty();  
  req.assert('course', 'course is required').notEmpty();

  var errors = req.validationErrors();
  if(errors){
    res.send(JSON.stringify({errors:errors}));
  }
  else{
    res.send(JSON.stringify(grade.postGrade(req.body.id, req.body.name, req.body.course, req.body.grade)));
  }
});
router.put('/', jsonParser, function(req, res, next){
  //res.send(JSON.stringify(grade.putGrade(req.body.id, req.body.name, req.body.course, req.body.grade)));
  req.assert('grade', 'grade is required').notEmpty();  
  var errors = req.validationErrors();
  if(errors){
    res.send(JSON.stringify({errors:errors}));
  }
  else{
    res.send(JSON.stringify(grade.putGrade(req.body.id, req.body.grade)));
  }
  
});
router.delete('/:id',function(req, res, next){
  res.send(JSON.stringify(grade.deleteGrade(req.params.id)));
});

module.exports = router;
