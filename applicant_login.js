const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const db = require('../conn/conn');

router.post('/stu_login', function(req, res) {

	var email = req.body.email
	var password = req.body.password
	
	if (email && password) {
		db.query('SELECT * FROM applicant WHERE email = ? AND password = ?', [email, password], function(err, results) {
			if (results.length>0) {
				jwt.sign({email}, 'secretkey', { expiresIn: '30s' }, (err, token, rows) => {
					res.send({   
						token,
						rows,
						results
					});
				  });  
				  console.log(results)
 
			} else {
				console.log('Email or password is incorrect');
				return res.send('Email or password is incorrect'); 
			}	
		})
	}
	 
});

 
module.exports = router ;