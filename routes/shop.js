const express = require('express');
const router = express.Router();

//this is the default route
router.get('/',(req,res,next)=>{
    res.send('<h1>Hello world this is a test</h1>');
})

module.export = router;