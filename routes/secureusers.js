var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
const jwt = require('jsonwebtoken');
require('dotenv').config()
var router = express.Router();

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  database: 'postgres',
  host: 'localhost',
  port: '5432'
});

router.post('/getUser',function(req, res, next) {
  console.log(req);
  
  res.sendStatus(200);
});



module.exports = router;
