// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

const express = require("express");
// Import the model (burger.js) to use its database function
const burger = require("../models/burger");

const router = express.Router();

// TO DO - Create all our routes and set up logic within those routes where required.

// Export routes for server.js to use.
module.exports = router;