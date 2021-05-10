
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.get('/n',function(req,res){

    
        var email= req.body.email;
        var password = req.body.password;
        db.query('SELECT * FROM admin_reg WHERE email = ?',[email], function (error, results, fields) {
        if (error) {

          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        }else{
         
          if(results.length >0){
            if(results[0].password == password){
                
                var email = req.body.email
                db.query('select * from admin_reg where username = ?',email, function(err, results, fields){  
                    return res.send(results)
                })
            }
            else{
              res.send({
                "code":204,
                "success":"email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"email does not exist"
                });
          }
        }
    });

})

router.get('/register', function (req, res) {

   
  mysqlConn.query('SELECT * FROM register ', (error, result) => {
          if (error) throw error;
   
          res.send(result);
      });
  });

  router.get('/applications', function (req, res) {

   
    mysqlConn.query('SELECT * FROM applicantinfo ', (error, result) => {
            if (error) throw error;
     
            res.send(result);
        });
    });
  

module.exports = router ;