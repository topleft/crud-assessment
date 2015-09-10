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

function handleGetOne(id, cb){
  Program.find({_id: id}, function(err, program){
    if (err) return err;
    return cb(program);
  });
}



function handlePut(id, inputName, inputLanguage, cb){
  var query = {_id: id};
  var update = {name: inputName, language: inputLanguage};
  var option = {'new': true};
  var updatedProgram = Program.findOneAndUpdate(query, update, option, function(err, program){
    if (err) return err;
    cb(program);
  });
}

function handleDelete(id, cb){
  Program.remove({_id: id}, function(err){
    if (err) cb(err);
    cb("Program removed successfully.");  })
};



module.exports = {
  handleGet: handleGet,
  handlePost: handlePost,
  handleGetOne: handleGetOne,
  handlePut: handlePut,
  handleDelete: handleDelete
}

