var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BootcampSchema = new Schema({
//
});

var Bootcamp = mongoose.model("Bootcamp", BootcampSchema);
module.exports = Bootcamp;