// burger app - model/burger.js
// import orm to create functions that will interact with the database
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
};

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export the database function for the controller (burgers_controller.js)
module.exports = burger;