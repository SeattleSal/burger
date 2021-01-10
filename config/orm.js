// burger app - orm.js

const connection = require("../config/connection.js");

const orm = {
    // selectAll()
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { 
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table + " (" + cols.toString() + ") ";
        queryString += "VALUES (?, ?)"
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
    // , updateOne: function (...)

}

// export the orm object for the model (burger.js)
module.exports = orm;
