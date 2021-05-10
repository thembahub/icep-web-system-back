const express = require('express');
const router = express.Router();
const  db = require('../conn/conn');

//Udate profile
<<<<<<< HEAD
 router.put('/update_applicant', (req, res) => {
     
    var post = {
        "firstName" : req.body.firstName,
        "lastName" : req.body.lastName,
        "email" : req.body.email,
        "applicationId" : req.body.applicationId,
        "password" : req.body.password
    };

   db.query('update applicant set ?', [post], (err, rows) =>{
=======
router.put('/update_profile', (req, res) => {
    
    const {status} = req.body
    const {id} = req.params

   db.query('update applicantinfo  set status = ? where id = ?', [status, id], (err, rows) =>{
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
     if(!err){
       res.send('status has been updated.')
     }else{
       console.log(err)
     }
   })
<<<<<<< HEAD
   console.log(req.body)
 })  
module.exports = router ; 
=======
   console.log(id)
 }) 
module.exports = router ;
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
