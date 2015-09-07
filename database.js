var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var programSchema = new Schema({
  name: String,
  language: String
})

var Program = mongoose.model('Program', programSchema);
 module.exports = Program;

 mongoose.connect('mongodb://localhost/program-database');