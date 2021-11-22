var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');
require('dotenv').config()
var router = express.Router();

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  database: 'postgres',
  host: 'localhost',
  port: '5432'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/changePassword', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/changeEmail', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/changeEmail', function(req, res, next) {
  res.send('respond with a resource');
});
/*router.post('/login', function(req, res, next) {
  console.log(req.body.user_name)
  // manual
  const username = req.body.user_name;
  const password = req.body.pass;

  if(username == "edmel") {
    if(password == "password") {
      res.sendStatus(200);
    }
  }
  res.send(401);

});*/

router.post("/login", async function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  console.log("usernasme", username);
  console.log("password", password);
  //await pool.connect();
  const results = await pool.query("select * from users where username = '" + username + "'" ); 
  console.log(results.rows);
  if(results.rows.length > 0) {
    //matches founds
    if(results.rows[0].password == password) {
      res.json({
        status: 'success',
        token: "wedfghjkl;sdfdsfdsfs"
      })
      //res.send(200);
    } else {
      res.send(401);
    }
  } else {
    //no matches
    res.send(401);
  }
})




module.exports = router;
