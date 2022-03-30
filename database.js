// var mysql = require('mysql');
import mysql from 'mysql';
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port : '3306',
    database: 'ticket-reservation'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });