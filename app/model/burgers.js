var Sequelize = require("sequelize");
var connection = require("../config/connection.js");

var burgers = connection.define("burgers",{
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});
burgers.sync();
try {
    burgers.findAll().then(data => {
        //console.log(data);
        if (data.length === 0){
            console.log("table empty - populating table");
            burgers.bulkCreate([{burger_name: "The Ron Swanson", devoured: false},{burger_name: "Krabby Patty", devoured: false},{burger_name: "The Quadruple Bypass Burger", devoured: false}]).then(data =>{
                console.log(data);
                module.exports = burgers;
            }).catch(err => {console.log(err)});
        } else {
            module.exports = burgers;
        }
    }).catch(err => {console.log(err)});
} catch (error) {
    console.log(error);
}
module.exports = burgers;