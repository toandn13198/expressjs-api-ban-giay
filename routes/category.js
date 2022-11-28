var express = require('express');
var router = express.Router();
const C_category=require('../app/controller/Category');


//localhost:3000/product/
router.get('/',C_category.all);
router.get('/show/:id',C_category.show);
router.post('/add',C_category.add);
router.put('/edit/:id',C_category.edit);
router.delete('/delete/:id',C_category.delete);

//xuat ra 
module.exports = router;