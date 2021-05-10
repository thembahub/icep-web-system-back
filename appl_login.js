const jwt = require('jsonwebtoken')
const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');
var session = require('express-session');
const jwt = require('jsonwebtoken')

router.get('/login', (req, res) => {



router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.get('/applicant_login',function(req,res){

        var email= req.body.email;
        var password = req.body.password;

        
	if (!email || !password ){
    return response.send({ msg: 'Please enter all fields' });
 }
 if (user_pass.length < 6) {
   return response.send({ msg: 'Password must be at least 6 characters' });
   }
        
        db.query('SELECT * FROM register WHERE email = ?',[email], function (error, results, fields) {
        if (error) {

          res.send({
            code:400,
            message:"error ocurred unable to login"
          })
        }else{
            
          if(results.length >0){
            if(results[0].password == password){
                
                //var username = req.body.username
                db.query('select * from register where email = ?',email, function(err, results, fields){  
                    return res.send(results)
                    return res.send('welcome to icep login ' )
                    jwt.sign({email}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                      response.json({
                        token,
                       email:results
                      });
                      });	
                })
            }
            else{
              res.send({
                "code":204,
                "success":"Email and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Email does not exist"
                });
          }
        }
    });


  const [{email, password, id}] = req.body 
  
      db.query('SELECT * FROM applicant_info WHERE email = ? AND password = ?', [email , password], (err, results) => {
        console.log(results) 
        if (err) throw err 
        if (results.length>0) {
          jwt.sign({id}, 'secret', { expiresIn: '60s' }, (err, token) => { 
            if (err) throw err
            res.json({  
              token, results         
            });
            });
            redirect()
  
        } else {
          console.log('Email or password is incorrect'); 
          return res.send('Email or password is incorrect');
        }	
      })
    
  });


module.exports = router ;