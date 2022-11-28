const dbConn=require('../models/db');
class Screens{

    home(req, res, next){
        let sql_product = 'SELECT * FROM product';
        let sql_category = 'SELECT * FROM catagory'
        
        dbConn.query(sql_product, function(err, data, fields) {      
            if (err) throw err;
            return data;
        }) 

        var arr_category=[]
        dbConn.query(sql_category, function(err, result, fields) {      
            if (err) throw err;
            setValue(result)
        }) 
        function setValue(value) {
            arr_category = value;
        }


    }

    productDetail(req, res, next){

    }
    
}

module.exports= new Screens