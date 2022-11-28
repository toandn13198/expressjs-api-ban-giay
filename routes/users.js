var express = require('express');
var router = express.Router();
const C_user=require('../app/controller/User');

//localhost:3000/user/
router.get('/',C_user.all);
router.get('/show/:id',C_user.show);
router.post('/add',C_user.add);
router.put('/edit/:id',C_user.edit);
router.delete('/delete/:id',C_user.delete);

module.exports = router;
