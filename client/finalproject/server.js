var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var session = require("express-session")

var PORT = process.env.PORT || 3001;


// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//Import the models folder
var db = require("./models");

// Require all models
// var db = require("./models");

// Initialize Express
var app = express();


// Creating express app and configuring middleware 
//need to read public folder

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// Use session sto keep track of the users lagin status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());





// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

//listening to see if its working 
db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log("server running")
    })

})


