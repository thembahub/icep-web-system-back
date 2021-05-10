const express       = require('express');
const path          = require('path')
const app           = express()
const multer        = require('multer')    
const mysql         = require('mysql')
const bodyParser    = require("body-parser");
const db            = require('../conn/conn'); 
const DIR           = './files';

 
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/upload_id',upload.single('file') ,function (req, res) {
   
          var message = "Error! in identity document(id) upload."
          if (!req.file) {
                console.log("No file received");
                message = "Error! in identity document upload."
        } else{
              
            console.log('file received');
            var sql = `INSERT INTO file_id (name, type,size) VALUES ('${req.file.filename}','${req.file.mimetype}','${req.file.size});`;
      
            message = " your cv Successfully! uploaded";
       
            }
      });

module.exports = app ;