// burger app - model/burger.js
// import orm to create functions that will interact with the database
const orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM.
const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(results) {
            cb(results);
        });
    },
    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(results) {
            cb(results);
        })
    },
    update: function(val, condition, cb) {
        orm.updateOne("burgers", val, condition, function(result) {
            cb(result);
        });
    }
};

// Export the database function for the controller (burgers_controller.js)
module.exports = burger;