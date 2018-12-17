const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');
const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//error page if no route is found
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

//this return a server
// const server = http.createServer(app);

app.listen(3000);

