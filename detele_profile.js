const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.delete('/delete_profile/:id', function (req, res) {
   
   
    db.query('DELETE FROM register WHERE id =?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ data: results, message: 'student has been deleted successfully.' });
    });
})
module.exports=router;