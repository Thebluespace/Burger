// Set up MySQL connection.
var Sequelize = require("sequelize");
var sequelize = new Sequelize("burgers_db","root","root",{
   host: "localhost",
   port: 8889,
   dialect: "mysql",
   pool: {
    max: 5,
    min: 0,
    idle: 10000
   }
});

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 8889,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });
// // Make connection.
// connection.connect(function(err) {
//   if (err) return console.error("error connecting: " + err.stack);
//   console.log("connected as id " + connection.threadId);
// });
module.exports = sequelize;
