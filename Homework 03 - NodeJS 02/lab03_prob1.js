var dns = require('dns')
var ip_address = dns.lookup('www.mum.edu', function(err, address, family){
    console.log(address);
    return address;
    //console.log(address);
});
var ip_address = dns.resolve4('www.mum.edu', function(err, address){
    console.log(address);
});
//console.log(ip_address);