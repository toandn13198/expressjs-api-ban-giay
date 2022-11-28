var express = require('express');
var router = express.Router();
const C_screen=require('../app/controller/Screens');


//localhost:3000/product/
router.get('/',C_screen.home);
router.get('/product/:id',C_screen.productDetail);

//xuat ra 
module.exports = router;