require('dotenv').config();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.DATASOURCE_URL,
  user     : process.env.DATASOURCE_USERNAME,
  password : process.env.DATASOURCE_PASSWORD,
  database : process.env.DATASOURCE_DATABASE
});

connection.connect();

connection.query('SELECT * from rental', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});

connection.end();
