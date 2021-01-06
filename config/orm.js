// burger app - orm.js

const connection = require("./connection");

module.exports = {
    // selectAll()
    selectAll() {
        return connection.query("SELECT * FROM burgers")
    },

    // insertOne()
    insertOne(data) {
        return connection.query("INSERT INTO burgers SET ?",
        {
            burger_name: data.name
        });
    },

    // updateOne()
    updateOne(data) {
        return connection.query("UPDATE burgers SET ? WHERE ?",
        [
            { 
                burger_name: data.name
            },
            {
                id: data.id
            }
        ]);
    }
}