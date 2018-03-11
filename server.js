//Dependencies
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

//process.env.PORT will set port to the environment variable PORT, or 3000 if there's nothing there.
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

//Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
//Middleware that formatts req in a consumable formatt
app.use(bodyParser.json());

// bring in the models
var db = require("./models");//don't know path yet

//Routes
var routes = require("./routes");

app.use("/", routes);


// Start the server
app.listen(PORT, function() {
	console.log("server is now running on PORT ", PORT);
})

