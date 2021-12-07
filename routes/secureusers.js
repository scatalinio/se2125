var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config()
var router = express.Router();


const pool = new Pool({
  user: 'vrgnrizumsqiut',
  password: '80c02a3f565ea24551d1c5e7b0c4bb495c454ae22a407349470d59808669154d',
  database: 'd9aholjd8qmsp1',
  host: 'ec2-3-228-75-39.compute-1.amazonaws.com',
  port: '5432'
});

router.post('/getUser',function(req, res, next) {
  console.log(req);
  
  res.sendStatus(200);
});



module.exports = router;
