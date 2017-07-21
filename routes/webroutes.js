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
        }
      })
      .then(function(response) {
        res.send(response);
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
