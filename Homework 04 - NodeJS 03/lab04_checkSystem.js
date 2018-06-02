
var os = require('os');
//memory_size is at least min_mem GB 
//processors has more than min_core cores
var min_mem = 14;
var min_core = 12;
var msg_check = 'Checking your system...';
var msg_mem = 'This app needs at least '+min_mem+' GB of RAM';
var msg_core = 'Processor is not supported';
var msg_success = 'System is checked successfully';

function checkSystem(){
    console.log(msg_check);
    var num_core = os.cpus().length; 
    var memory_size = os.totalmem();  
    memory_size = Math.ceil(memory_size / Math.pow(1024,3)) ;
    //console.log('num_core: '+num_core);
    //console.log('memory_size: '+memory_size);
    return new Promise(function(resolve, reject){
        if(memory_size >= min_mem && num_core >= min_core){
            reject([memory_size, num_core]); 
        }
        else{            
            resolve([memory_size, num_core]);
        }        
    });
}

checkSystem()
.then(msg => {
    if(msg[0] < min_mem )
       console.log(msg_mem);
    return msg[1];
})
.then(msg => {
    if(msg < min_core )
        console.log(msg_core);
})
.catch(msg => {console.log(msg_success)});

