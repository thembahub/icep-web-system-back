const express = require('express');
const cors = require('cors'); 


const app = express();
  
const ports = process.env.PORT || 5000;
 

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); 
  }
  next(); 
});

// api routes

app.use('/', require('./routes/register'));
app.use('/', require('./routes/applicant_login'));
app.use('/', require('./routes/admin'));
app.use('/', require('./routes/application')); 
 
app.listen(ports, () => console.log(`ICEP webserver up and running on http://localhost:${ports}`));


 

/*const express = require('express');
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
 app.use('/', require('./routes/applicant_login'));
 app.use('/', require('./routes/student_profile'));
 app.use('/', require('./routes/update_profile'));
 app.use('/', require('./routes/application'));
 app.use('/', require('./routes/update_admin_profile'));
 
 app.use('/', require('./routes/admin'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () { 
    console.log('Server up and running on http://localhost:' + port);
})*/