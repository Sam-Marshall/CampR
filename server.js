// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

// Require Models
var camprdb = require("./models");

// Create Instance of Express
var app = express();

// Sets a port
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

require("./routes/webroutes.js")(app);

camprdb.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT: " + PORT);
    });
});