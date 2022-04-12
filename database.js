// var mysql = require('mysql');
import mysql from 'mysql';
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'bradi123',
    database : "ticket-reservation"
  });
  


  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT username FROM users", function (err, result, fields) {
      if (err) throw err;
      // if there is no error, you have the result
      console.log(result);
    });
  });