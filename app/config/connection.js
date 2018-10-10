// Set up MySQL connection.
var Sequelize = require("sequelize");
var sequelize = new Sequelize("h7c3upa4r0lqhi91","hdco6ft1y2th5uj3","vi1ctx4wp9pwkd66",{
   host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
   port: 3306,
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
