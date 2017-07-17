var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TopicSchema = new Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    subtopic: [{
        type: Schema.Types.ObjectId,
        ref: "Subtopic"
    }]

});

var Topic = mongoose.model("Topic", TopicSchema);
module.exports = Topic;
