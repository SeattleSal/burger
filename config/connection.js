// burger app - /config/connection.js

const mysql = require("mysql");
let connection;
require("dotenv").config(); // used to hide password

// heroku setup
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PASSWORD,
        database: "burgers_db"
    })
};

connection.connect((err) => {
    if(err) throw err;
});

module.exports = connection;