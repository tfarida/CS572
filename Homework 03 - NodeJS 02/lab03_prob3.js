var EventEmitter = require('events').EventEmitter;

class Clock extends EventEmitter{
    constructor(){
        super();
       // this.message = 'HAI';
        
    }
    tick(){
       // console.log(this.message);
        this.emit('tick');
    }
}

var obj = new Clock();
obj.on('tick', function(data){
    console.log('woohoo');
});

obj.tick();