const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const db = require('../conn/conn');

//Post vacancy
router.post('/post', function(req, res){ 

  var vacancyName = req.body.vacancyName
  var vacancyDesc = req.body.vacancyDesc
  var closingDate = req.body.closingDate 
  
       db.query('INSERT INTO vacancies SET vacancyName = ?, vacancyDesc = ?, closingDate = ?', [vacancyName, vacancyDesc, closingDate], (err, results, fields) => {
           if(err){ 
             throw err   
           }else{ 
             return res.send({message: ' Vacancy succesfully posted on the website'});  
           } 
   });   
})



//register student 
router.post('/register', function(req, res){ 

  // var [{firstName, lastName, email, password}] = req.body
  // var post = [{"firstName" : req.body.firstName, "lastName" : req.body.lastName,"email" : req.body.email, "password" : req.body.password}];

  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var password = req.body.password

   db.query('SELECT email FROM admin WHERE email = ?', [email], async(err, results) => {
       if(err){
        throw err 
       }
       if(results.length > 0) 
       {
        return res.send({message: 'Email already exist'});
       } 
       db.query('INSERT INTO applicant SET firstName = ?, lastName = ?, email = ?, password = ?', [firstName, lastName, email, password], (err, results, fields) => {
           if(err){ 
             throw err   
           }else{
            // console.log(); 
             return res.send({message: firstName + ', have been added as an admin succesfully'});  
           } 
   });
})
})
//login
router.post('/ad_login',function(req,res){
       var email = req.body.email
       var password = req.body.password 
        
        if (email && password) {
          db.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], function(err, results, rows) {
            if (results.length>0) {
              jwt.sign({email}, 'secretkey', { expiresIn: '30s' }, (err, token) => { 
                res.send({
                  token,
                  results 
                });
                }); 
       
            } else { 
              return res.send({message: 'Email or password is incorrect'}); 
            }	
          })
        }

})
//view profiles list
router.get('/profiles', (req, res) => {
    db.query('SELECT * from applicant', (err, rows) =>{
      if(!err){
        res.send(rows)
      }else{
        console.log(err)
      }
    })
  })

  //view profiles list
router.get('/Applicationss', (req, res) => {
  db.query('SELECT * from applications', (err, rows) =>{
    if(!err){
      res.send(rows)
    }else{
      console.log(err)
    }
  })
})
  //view posts list
router.get('/postsssss', (req, res) => {
  db.query('SELECT * from vacancies', (err, rows) =>{
    if(!err){
      res.send(rows)
    }else{
      console.log(err)
    }
  })
})
//delete profile
router.delete('/:applicationId', (req, res) => {

    db.query('DELETE FROM applicant WHERE applicationId = ?', [req.params.applicationId], (err, rows) =>{
      if(!err){
        res.send('Applicant has been deleted.')
      }else{
        console.log(err)
      }
    })
  })

  // update application status
  router.put('/update', (req, res) => {
    
       const {status, applicationId} = req.body
  
      db.query('update applicant set status = ? where applicationId = ?', [status, applicationId], (err, rows) =>{
        if(!err){
          res.send('status has been updated.')
        }else{
          console.log(err)
        }
      })
      console.log(req.body)
    })  

module.exports = router;