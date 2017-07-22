var camprdb = require('../models');

module.exports = function(app) {

    // Topics
    app.get('/api', function(req, res) {
        camprdb.Topic.findAll({})
            .then(function(response) {
                res.json(response)
            });
    });

    // Subtopics
    app.get('/api/subtopics/:topicId', function(req, res) {
        console.log(req.params.topicId);
        camprdb.Subtopic.findAll({
                where: {
                    topic_id: req.params.topicId
                },
                include: {
                    model: camprdb.Snippet
                }
            })
            .then(function(response) {
                res.send(response);
            });
    });

    // Topics including subtopics, snippets, and comments
    app.get("/api/topic/:topicId", function(req, res) {

        camprdb.Topic.findAll({
                where: {
                    id: req.params.topicId
                },
                include: {
                    model: camprdb.Subtopic,
                    include: [{
                        model: camprdb.Snippet
                    }, {
                        model: camprdb.Comment
                    }]
                }
            })
            .then(function(response) {
                res.send(response);
            });

    });

    // Main "/" Route. This will redirect the user to our rendered React application
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });

}