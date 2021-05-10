const express = require('express');
const router = express.Router();
const  db = require('../conn/conn');
router.use(express.urlencoded({extended: true}))
router.use(express.json());

<<<<<<< HEAD

//register student 
        router.post('/stu_register', function(req, res){ 
=======
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//register student 

        router.post('/register', function(req, res){ 

//const nodemailer = require('nodemailer');

//register student 

        router.post('/register', (req, res) =>{  

            var post = {
                "id" : req.body.id,
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "email" : req.body.email,
                "password" : req.body.password
            };
        
             
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b

       // var [{firstName, lastName, email, password}] = req.body
       // var post = [{"firstName" : req.body.firstName, "lastName" : req.body.lastName,"email" : req.body.email, "password" : req.body.password}];
    
       var firstName = req.body.firstName
       var lastName = req.body.lastName
       var email = req.body.email
       var password = req.body.password

<<<<<<< HEAD
        db.query('SELECT email FROM applicant WHERE email = ?', [email], async(err, results) => {
            if(err){
             throw err 
            }
            if(results.length > 0) 
            {
             return res.send({message: 'Email already exist'});
            } 
            db.query('INSERT INTO applicant SET firstName = ?, lastName = ?, email = ?, password = ?', [firstName, lastName, email, password], (err, results, fields) => {
=======

            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }

            db.query('INSERT INTO applicant_info SET ?', [post], function(err, results) {
                if(err){
                  throw err
                }else{
                 
                  res.send({data: req.body,msg:"successfully registered"});
                  res.end();  
                };
             
              })
            if (!email || !password ){
                return response.send({ msg: 'please insert email and password ' });
             }
             if (password.length < 6) {
               return response.send({ msg: 'Password must be at least 6 characters' });
               }
               if (!first_name || !last_name) {
                return response.send({ msg: 'Please enter all fields' });
                }

                var user = post;
    
               /* bcrypt.hash(user.password, 10, function(err, hash){
                        if(err) console.log(err);
                        user.password = hash;
                    })*/

            var myQuery = "INSERT INTO register SET ?";
            db.query(myQuery, [post], function(err, results, fields){
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
                if(err){ 
                  throw err   
                }else{
<<<<<<< HEAD
                  return res.send({message: firstName + ', You have created a profile succesfully'});  
                } 
        });   
    })
    })
module.exports = router; 
=======
                    var email = req.body.email
                    db.query('select * from register where email = ?',email, (err, results, fields) =>{
                    return res.send(results)
                })
            }
            });
        
            })
module.exports = router;
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
