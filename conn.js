const mysql = require('mysql');
const express = require('express');


const mysqlConn =mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'',
  database:'icepDB',
  multipleStatements: true

})


mysqlConn.connect((err)  =>{

      if(!err){
          console.log('ICEP database connected succeesfully');
      }else{
          console.log('Sory could not connect to ICEP database');
      }

    });


module.exports =mysqlConn;