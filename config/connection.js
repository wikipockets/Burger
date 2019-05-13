require('dotenv').config();

const mysql = require('mysql');

const keys = require('./keys');



//use jawsdb environmnent and variable, otherwise use local mysql
if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection(keys.mysql);
}


connection.connect();

module.exports = connection;