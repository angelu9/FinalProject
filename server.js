var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./Routes/api/games");
var PORT = 3001;

// Require all models
// var db = require("./models");

// Initialize Express
var app = express();


// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
app.use("/api", routes);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/gamedb", { useNewUrlParser: true });


app.listen(PORT, ()=> {
    console.log("server running")
})

