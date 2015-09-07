var Program = require("../../database.js");

console.log("crud.js working");

function handleGet(cb){
  Program.find({}, function(err, programs){
    if (err) return err;
    return cb(programs);
  });
}

function handlePost(inputName, inputLanguage){
  newProgram = new Program({name: inputName, language: inputLanguage});
  newProgram.save(function(err){
    if (err) return err;
  });
  return newProgram;
}

// function handlePut(inputName, inputLanguage){
//   Program.findOneAndUpdate({name: inputName, language: inputLanguage}, function(){

//   });
// }



module.exports = {
  handleGet: handleGet,
  handlePost: handlePost
}

