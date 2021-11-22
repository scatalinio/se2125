var express = require('express');
/**
 * pgsql library lib
 */
const { Pool, Client } = require('pg');
require('dotenv').config()
var router = express.Router();

/*
const pool = new Pool({
  user: 'postgres',
  password: 'root',
  database: 'postgres',
  host: 'localhost',
  port: '5432'
});*/

/* GET users listing. */
router.get('/getStudents', async function(req, res, next) {

  /**
   * get bearer token
   */

   /**
    * validate bearer
    */

    /**
     * if token is invalid
     * res.sendStatus(401)
     * else 
     * proceed with processing
     */
  console.log("pgpassword here", process.env.PGPASSWORD);
  const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT
  });
  console.log("creating client");
  await client.connect();
  console.log("connected");

  const result = await client.query("select name, gender from students");
  client.end();
  console.log(result.rows);
  res.send(result.rows);
});

router.get('/getStudents1', function(req, res, next) {
  res.send('i will query all student 1 data from the database');
});

router.get('/getStudents2', function(req, res, next) {
  res.send('i will query all student 2 data from the database');
});

router.get('/getStudents3', function(req, res, next) {
  res.send('i will query all student 3 data from the database');
});
router.get('/downloadGrade', function(req, res, next) {
  res.send('download pdf file');
});

module.exports = router;
