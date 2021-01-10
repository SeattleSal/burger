// burger app - model/burger.js
// import orm to create functions that will interact with the database
const orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM.
const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
    // ,
    // to do - create
    // to do - update
    // to do - delete
};

// Export the database function for the controller (burgers_controller.js)
module.exports = burger;