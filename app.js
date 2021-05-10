
const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors')
const mysqlConn= require('./conn/conn');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// api routes

 app.use('/', require('./routes/register'));
 app.use('/', require('./routes/student_profile'));
 app.use('/', require('./routes/update_profile'));
 app.use('/', require('./routes/admin_reg'));
 app.use('/', require('./routes/application'));

 app.use('/', require('./routes/update_admin_profile'));
 app.use('/', require('./routes/upload_cv'));
 app.use('/', require('./routes/upload_id'));
 app.use('/', require('./routes/appl_login'));
 app.use('/', require('./routes/admin_login'));
 app.use('/', require('./routes/upload_academic'));
 app.use('/', require('./routes/view_profiles'));
 app.use('/', require('./routes/view_applications'));
 app.use('/', require('./routes/detele_profile'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
})