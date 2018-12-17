const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    console.log('inside of the middleware');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    // next(); //allows the request to continue to the next middleware in line
})

// /admin/add-product => POST
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;