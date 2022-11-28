var express = require('express');
var router = express.Router();
const C_product=require('../app/controller/Product');


//localhost:3000/product/
router.get('/',C_product.all);
router.get('/show/:id',C_product.show);
router.post('/add',C_product.add);
router.put('/edit/:id',C_product.edit);
router.delete('/delete/:id',C_product.delete);

//xuat ra 
module.exports = router;