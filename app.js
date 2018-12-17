const http = require('http');

//this return a server
const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000);