var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	location: String
});

module.exports = mongoose.model("items", itemSchema);

