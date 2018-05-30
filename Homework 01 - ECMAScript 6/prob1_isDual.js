//write a method isDual() to be used by all Array objects. 
//An array is is dual when: has even num of elems, each pair of consecutive elems sum to the same value
//return 1 if is dual, 0 otherwise

Array.prototype.isDual = isDual;
console.log([1,2,3,0].isDual());
console.log([1,2,2,1,3,0].isDual());
console.log([1,1,2,2].isDual());
console.log([1,2,3].isDual());
console.log([].isDual());


function isDual(){
  if (this.length == 0 || this.length == 2) {
    return 1;
  }
  else if (this.length %2 != 0){
    return 0;
  }
  var init = this[0]+this[1];
  var temp;
  for(var i=2;i<this.length;i++){
    if(i%2 == 0 ){
      temp = this[i];
    }
    else{
      temp = temp+ this[i];
      if (temp != init){
        return 0;
      }
    }
  }
  
  return 1;
  
}


