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
    }

}

// export the orm object for the model (burger.js)
module.exports = orm;


    // // insertOne()
    // insertOne(data) {
    //     return connection.query("INSERT INTO burgers SET ?",
    //     {
    //         burger_name: data.name
    //     });
    // },

    // // updateOne()
    // updateOne(data) {
    //     return connection.query("UPDATE burgers SET ? WHERE ?",
    //     [
    //         { 
    //             burger_name: data.name
    //         },
    //         {
    //             id: data.id
    //         }
    //     ]);
    // }