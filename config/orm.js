// burger app - orm.js

const connection = require("../config/connection.js");

const orm = {
    // selectAll()
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) { 
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: function(table, col, val, cb) {
        let queryString = "INSERT INTO " + table + " (" + col.toString() + ") ";
        queryString += "VALUES (?)"
        console.log(queryString);
        connection.query(queryString, val, function (err, result) {
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
