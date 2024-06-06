const mysql = require('mysql2');

console.log(process.env.DATABASE_HOST)

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

module.exports = connection.promise();
