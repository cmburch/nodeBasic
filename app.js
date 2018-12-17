const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    console.log('inside of the middleware');
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // next(); //allows the request to continue to the next middleware in line
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

//this is the default route
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello world this is a test</h1>');
})

//this return a server
// const server = http.createServer(app);

app.listen(3000);

