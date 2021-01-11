// burger app - orm.js

const connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
// Source: Course activity Week 13 - activity 17 CatsApp
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

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
        connection.query(queryString, val, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    // updateOne()
    updateOne: function(table, val, condition, cb) {
        let value = objToSql(val);
        let queryString = "UPDATE " + table + " SET " + value + " WHERE " + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // deleteOne()
    deleteOne: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table + " WHERE " + condition;
        console.log("Condition" + condition);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        })
    }
}

// export the orm object for the model (burger.js)
module.exports = orm;
