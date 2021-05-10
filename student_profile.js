const express = require('express');
const route=express.Router();
const mysqlConn= require('../conn/conn');

route.get('/profile/:id', (req, res) => {
<<<<<<< HEAD
=======


    mysqlConn.query('SELECT * FROM applicant_info WHERE id = ?', [req.params.id], (err, rows) => {
        if(err){
            throw err
          }else{
            console.log(rows);
            return res.send(rows);  
          }
    });
    
  })
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b

    mysqlConn.query('SELECT * FROM applicant WHERE id = ?', [req.params.id], (err, rows) => {
        if(err){
            throw err
          }else{
            console.log(rows);
            return res.send(rows);  
          }
    });
    
  })

<<<<<<< HEAD
=======

>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
module.exports=route;