const dbConn=require('../models/db');

class Catagory{
    
    all(req, res, next){
        let sql = 'SELECT * FROM catagory';
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
        let sql='SELECT * FROM catagory where id=?';
        dbConn.query(sql,id, function (err, data) {
         if (err) throw err;
          return res.send (data[0]);
        });
    };

    add(req, res, next) {
        //nhận dữ liệu từ client để thêm record vào db
        var data = req.body.catagory;
        data.slide=JSON.stringify(data.slide);
        data.colors=JSON.stringify(data.colors);
        data.size=JSON.stringify(data.size);
        if (!data) {
            return res.status(400).send({ error:true, message: 'Du lieu sai dinh dang mau!' });
        }else{
            let sql="INSERT INTO catagory SET ?";
            dbConn.query(sql,data,function (err, data) {
                if (err) throw err;
                 return res.send ({error: false, message: 'Them moi thanh cong!'});
               });
        }  
    }

    edit(req, res, next) {
        //nhận thông tin id và update dl trong db
      let id = req.params.id;
      let catagory = req.body.catagory;
      if (!id || !catagory) {
        return res.status(400).send({ error: true, message: 'Co loi xay ra, vui long kiem tra lai du lieu gui len!' });
      }
      let sql="UPDATE catagory SET ? WHERE id = ?";
      dbConn.query(sql, [catagory, id], function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Cap nhat thanh cong!'});
        });
    }

    delete(req, res) {
        //nhận thông tin id và delete trong db
      var id = req.params.id;
      dbConn.query("DELETE FROM catagory WHERE id = ?",id, function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Cap nhat thanh cong!'});
        });
    }
}

module.exports=new Catagory;

