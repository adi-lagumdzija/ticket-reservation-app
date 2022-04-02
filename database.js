// var mysql = require('mysql');
import mysql from 'mysql';
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'bradi123'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });