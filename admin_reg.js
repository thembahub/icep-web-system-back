const express = require('express');
const router = express.Router();
const  db = require('../conn/conn');

//register student 

        router.post('/admin_reg', function(req, res){  
            var post = {
                

               
                "email" : req.body.email,
                "password" : req.body.password

        
            };
        
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            var myQuery = "INSERT INTO admin_reg SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!!!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from admin_reg where email = ?',email, function(err, results, fields){
                        
                 
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;