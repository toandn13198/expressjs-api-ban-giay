const dbConn=require('../models/db');

class Product{
    
    all(req, res, next){
        let sql = 'SELECT * FROM product';
        dbConn.query(sql, function(err, data) {      
            if (err) throw err;
            return res.send(data[0]);
        })
    }

    show(req, res) {
        let id = req.params.id;
        if (!id) {
         return res.status(400).send({ error: true, message: 'khong ro id' });
        }
        let sql='SELECT * FROM product where id=?';
        dbConn.query(sql,id, function (err, data) {
         if (err) throw err;
          // return res.send (data[0]);
          console.log(data[0])
        });
    };

    add(req, res, next) {
        //nhận dữ liệu từ client để thêm record vào db
        var data = req.body.product;
        data.slide=JSON.stringify(data.slide);
        data.colors=JSON.stringify(data.colors);
        data.size=JSON.stringify(data.size);
        if (!data) {
            return res.status(400).send({ error:true, message: 'Du lieu sai dinh dang mau!' });
        }else{
            let sql="INSERT INTO product SET ?";
            dbConn.query(sql,data,function (err, data) {
                if (err) throw err;
                 return res.send ({error: false, message: 'Them moi thanh cong!'});
               });
        }  
    }

    edit(req, res, next) {
        //nhận thông tin id và update dl trong db
      let id = req.params.id;
      let product = req.body.product;
      if(product.hasOwnProperty('slide')){
        product.slide=JSON.stringify(product.slide);
      }
      if(product.hasOwnProperty('colors')){
        product.colors=JSON.stringify(product.colors);
      }
      if(product.hasOwnProperty('size')){
        product.size=JSON.stringify(product.size);
      }
      if (!id || !product) {
        return res.status(400).send({ error: true, message: 'Co loi xay ra, vui long kiem tra lai du lieu gui len!' });
      }
      let sql="UPDATE product SET ? WHERE id = ?";
      dbConn.query(sql, [product, id], function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Cap nhat thanh cong!'});
        });
    }

    delete(req, res) {
        //nhận thông tin id và delete trong db
      var id = req.params.id;
      dbConn.query("DELETE FROM product WHERE id = ?",id, function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Cap nhat thanh cong!'});
        });
    }
}

module.exports=new Product;

