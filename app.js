const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.write('Hello world crazy motherfucker');
        res.end();
    }
});

server.listen('3000');

console.log('listening on port ')