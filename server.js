// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

// Require Models
var camprdb = require("./models");

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

app.get('/api', function(req, res) {
    camprdb.Topic.findAll({})
        .then(function(response) {
            res.json(response)
        });
});

app.get("/topics", function(req, res) {

    Topic.find({}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }

    });

});

app.get("/:topic/subtopics", function(req, res) {

    Topic.find({ "name": req.params.topic })
        .populate("subtopic")
        .exec(function(err, doc) {
            if (err) {
                console.log(error);
            } else {
                console.log(doc);
            }
        });
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

camprdb.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});