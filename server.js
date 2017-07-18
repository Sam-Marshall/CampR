// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// Require Schema
var Topic = require("./models/Topic");
var Subtopic = require("./models/Subtopic");
var Comment = require("./models/Comment");
var Snippet = require("./models/Snippet");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/campr");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/topics", function(req, res) {

    Topic.find({}, function(err, doc) {
        if (err) {
            console.log(error);
        } else {
            console.log(doc);
        }

    });

});

app.get("/:topic/subtopics", function(req, res) {

    Topic.find({ "name": req.params.topic })
        .populate("subtopic")
        .exec(function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
            }
        });
});

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
