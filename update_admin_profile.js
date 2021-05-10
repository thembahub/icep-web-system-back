const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../conn/conn');

//Udate profile
router.put('/update_pro', (req, res) => {
    
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
module.exports = router ;