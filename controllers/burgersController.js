// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database function
const burger = require("../models/burger.js");

// TO DO - Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

// to do - router.post("/api/burgers")
router.post("/api/burgers", function(req, res) {
    console.log(req.body)
    burger.create(
        "burger_name", 
        req.body.name,
        function(result){
            res.json({ id: result.insertId});
        }
    );
})

// to do - router.put("/api/burgers/:id")
// to do - router.delete("/api/burgers/:id")

// Export routes for server.js to use.
module.exports = router;