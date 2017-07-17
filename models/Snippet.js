var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SnippetSchema = new Schema({

    name: {
        type: String
    },
    code: {
        type: String
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]

});

var Snippet = mongoose.model("Snippet", SnippetSchema);
module.exports = Snippet;
