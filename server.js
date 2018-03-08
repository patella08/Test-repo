// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
