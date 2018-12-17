const express = require('express');
const router = express.Router();

const path = require('path')

// this is the default route
router.get('/',(req,res,next)=> {
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
})

module.exports = router;