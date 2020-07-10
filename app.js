const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    else if(req.url === "/home"){
        res.write('i am home');
        res.end();
    }
});



server.listen('3000');

console.log('listening on port ')