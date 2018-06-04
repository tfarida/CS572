class Grade{  
    constructor(){
      this.data = [{id: 1, name: 'Asaad Saad', course:'CS572', grade:'95'}];  
      
    }
    getGrades(){
     // var arrGrades = [{id: 1, name: 'Asaad Saad', course:'CS572', grade:'95'}];  
      return this.data; //arrGrades;
    }

    getGrade(id){
        for(var i=0; i<this.data.length;i++){
          if(this.data[i].id == id) return this.data[i];
        }
        return 'data with id '+id +'not found';
        
    }
    postGrade(id, name, course, grade){
      var newGrade = {id, name, course, grade};
      this.data.push(newGrade);
      return this.data;
    }
    putGrade(id, grade){ //(id, name, course, grade){ //
      //console.log('id: '+id)
      for(var i=0; i<this.data.length;i++){
        if(this.data[i].id == id){
          // this.data[i].name = name;
          // this.data[i].course = course;
          this.data[i].grade = grade;
          return this.data[i];
        }
      }
      return 'data with id '+id +' not found';
    }
    deleteGrade(id){
      var indexToDelete = null ;
      for(var i=0; i<this.data.length;i++){
        if(this.data[i].id == id){
          indexToDelete = i;
          break;
        }
      }
      if(indexToDelete == null){
        return 'data with id '+id +' not found';
      }      
      this.data.splice(indexToDelete,1);
      return this.data;
    }
  
  
  }

  module.exports = Grade;