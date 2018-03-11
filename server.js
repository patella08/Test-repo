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

//Setup connection to mysql db here
//This is something the db team should have already configured


//routes: get, put, post, and delete

app.get('/get', function (req, res) {
  res.send("get");
  //add a sql query here that gets some information from the data base
  //send this data in res.send
  //our ajax call will console.log the res. You can test this by selecting the "get" button

})

// Start the server
app.listen(PORT, function() {
	console.log("server is now running on PORT ", PORT);
})

