const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log('inside of the middleware');
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // next(); //allows the request to continue to the next middleware in line
})
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;