var express = require("express");
var exphbs = require("express-handlebars")
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");


var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/scraper_controller.js");
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYTimesArt";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
