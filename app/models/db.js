var mysql = require('mysql');
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
});
// kết nối vào cơ sở dữ liệu
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected!");
  });
//xuat connect ra ben ngoai
module.exports=dbConn;