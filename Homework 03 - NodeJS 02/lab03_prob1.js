var dns = require('dns')
convertToIPAddress = domain => dns.resolve4(domain, function(err, address){
    console.log(address[0]);
});

convertToIPAddress('www.mum.edu');