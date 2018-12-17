const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('inside of the middleware')
    next(); //allows the request to continue to the next middleware in line
})

app.use((req,res,next)=>{
    res.send('<h1>Hello world this is a test</h1>');
})

//this return a server
const server = http.createServer(app);

server.listen(3000);