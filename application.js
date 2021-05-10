const express       = require('express');
const path          = require('path')
const app           = express()
const multer        = require('multer')    
const db            = require('../conn/conn'); 
const DIR           = './documents';
 
let storage = multer.diskStorage({
    destination: function (req, file, callback) {  
      callback(null,DIR);  
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      const filename = file.originalname.toLocaleLowerCase();
      cb(null,filename);
    } 
});

let upload = multer({storage: storage,
  fileFilter : function(req, file ,cb){
    if (file.mimetype == "file/docx" || "pdf" )
    {
      cb(null, true)
    }else{
      cb(null, false)
      {
        return cb(new Error('only docx , txt , pdf and http formatt allowed !'));
      }
    }
  }
  
});

app.post('/apply',upload.single('file') ,function (req, res) {
     
    var firstName = req.body.firstName
  	var lastName = req.body.lastName
    var email = req.body.email
    var studentno = req.body.studentno
    var specialization = req.body.specialization
    var mobileno = req.body.mobileno  
    var supportedDocs = req.file.path
   
           // console.log('file received');
            db.query('INSERT INTO applications SET firstName = ?, lastName = ?, email = ?, studentno = ?, specialization = ?, mobileno = ?, supportedDocs = ? ',[firstName, lastName, email, studentno, specialization, mobileno, supportedDocs], (err, results, fields) => {
                if(err){ 
                  throw err   
                }else{ 
                 //console.log(); 
                  return res.send({message: 'Application sent Succesfully'});  
                } 
        }); 
      });

<<<<<<< HEAD
module.exports = app ;
=======
                "firstname": req.body.firstname, 
                "lastname": req.body.lastname,
                "studentno": req.body.studentno,
                "specialization": req.body.specialization,
                "mobileno": req.body.mobileno,  
                "email": req.body.email,
                "document":  req.body.document,
                "status": req.body.status 
        
            };
   
            if(!post){
                res.send({
                    code : 400,
                    message : "FALSE"
                })
            }
        
            
            db.query('INSERT INTO applicantinfo SET ?', [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Already applied..."
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from applicantinfo where email = ?',email, (err, results, fields) =>{
                        
                 
                    return res.send(results)
                })
            }
            });
        
        })
module.exports = router;
>>>>>>> 1bfa9fa95c36af52419832dda2ff0438ea24bf9b
