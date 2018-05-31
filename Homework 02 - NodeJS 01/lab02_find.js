
const tree = { 
    name : "home", 
    files : ["notes.txt","todo.txt"], 
    subFolders: [  
      { name : "payroll", 
        files : ["paper.pdf","funds.csv"], 
        subFolders: [] 
      }, 
      { name: "misc", 
        files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
        subFolders: [
        { name : "logs", 
          files : ["logs1","logs2","logs3","logs4"], 
          subFolders: [] 
        }] 
    }] 
  }; 

//var find = file => tree => find0(file, tree);
var find = file => tree => {
    if(tree.files.length == 0){
        return false;
    }
    var found = false;
    for(var i=0; i<tree.files.length; i++){
        if(tree.files[i]=== file){
            return true;
            break;
        }
    }
    if(!found){
        for(var i=0; i<tree.subFolders.length; i++){
            var found = find(file)(tree.subFolders[i]);
            if (found){
               return true;
            }
        }
        return false;
    }
};

console.log(find("paper.pdf")(tree)); // true 
console.log(find("notes.txt")(tree)); // true 
console.log(find("funds.csv")(tree)); // true 
console.log(find("summer3.jpg")(tree)); // true 
console.log(find("logs4")( tree)); // true 
console.log(find("randomfile")(tree)); // false
  
