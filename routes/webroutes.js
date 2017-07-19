var camprdb = require('../models');

module.exports = function(app) {

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

}