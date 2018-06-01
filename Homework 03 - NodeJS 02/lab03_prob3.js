var EventEmitter = require('events').EventEmitter;

class Clock extends EventEmitter{
    constructor(){
        super();        
    }
    tick(){
        var self = this;    
       setInterval(function(){self.emit('tick')}, 1000);    //if not using arrow, need to use self. Otherwise "TypeError: this.emit is not a function". OMG java script |:(
       //setInterval(()=>{this.emit('tick')}, 1000);  // using arrow, solve the this problem |-O
    }   
}
var obj = new Clock();
obj.on('tick', function(data){
    console.log('woohoo');
});

obj.tick();