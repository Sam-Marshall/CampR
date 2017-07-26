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

    //Get comments
    app.get("/api/comment/:subtopicID", function(req, res) {

        camprdb.Comment.findAll({
                where: {
                    subtopic_id: req.params.subtopicID
                }
            })
            .then(function(response) {
                res.send(response);
            });

    });

    //New comments
    app.post("/api/:comment/:subtopicID", function(req, res) {

        var comment = req.params.comment;
        comment = comment.split('--').join('?');
        comment = comment.split('**').join('/');

        camprdb.Comment.create({
                comment: comment,
                subtopic_id: req.params.subtopicID
            })
            .then(function(response) {
                res.send(response);
            });

    });

}