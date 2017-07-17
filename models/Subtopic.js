var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubtopicSchema = new Schema({

    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    snippet: [{
        type: Schema.Types.ObjectId,
        ref: "Snippet"
    }]

});

var Subtopic = mongoose.model("Subtopic", SubtopicSchema);
module.exports = Subtopic;
