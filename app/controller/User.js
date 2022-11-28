const dbConn=require('../models/db');

class User{
    
    all(req, res, next){
        let sql = 'SELECT * FROM user';
        dbConn.query(sql, function(err, data) {      
            if (err) throw err;
            return res.send(data[0]);
        })
    }

    show(req, res) {
        var data = req.body.user;
        if (!data) {
            return res.status(400).send({ error:true, message: 'Du lieu sai dinh dang mau!' });
        }else{
            let sql='SELECT * FROM user where username=? and password=?';
            dbConn.query(sql,[data.username,data.password],function (err, data) {
                if (err) throw err;
                 return res.send (data[0]);
               });
        }  
    };

    add(req, res, next) {
        //nhận dữ liệu từ client để thêm record vào db
        var data = req.body.user;
        if (!data) {
            return res.status(400).send({ error:true, message: 'Du lieu sai dinh dang mau!' });
        }else{
            let sql="INSERT INTO user SET ?";
            dbConn.query(sql,data,function (err, data) {
                if (err) throw err;
                 return res.send ({error: false, message: 'Them moi tai khoan thanh cong!'});
               });
        }  
    }

    edit(req, res, next) {
        //nhận thông tin id và update dl trong db
      let id = req.params.id;
      let user = req.body.user;
      if (!id || !user) {
        return res.status(400).send({ error: true, message: 'Co loi xay ra, vui long kiem tra lai du lieu gui len!' });
      }
      let sql="UPDATE user SET ? WHERE id = ?";
      dbConn.query(sql, [user, id], function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Cap nhat thanh cong!'});
        });
    }

    delete(req, res) {
        //nhận thông tin id và delete trong db
      var id = req.params.id;
      dbConn.query("DELETE FROM user WHERE id = ?",id, function (err, data) {
        if (err) throw err;
            return res.send ({error: false, message: 'Xoa thanh cong!'});
        });
    }
}

module.exports=new User;

