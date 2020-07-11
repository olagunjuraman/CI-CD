const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.write('Hello world crazy motherfuckeffr');
        res.end();
    }
});

server.listen('3000');

console.log('listening on port ')