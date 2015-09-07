var Program = require("../../database.js");

console.log("crud.js working");

function handleGet(cb){
  Program.find({}, function(err, programs){
    if (err) return err;
    return cb(programs);
  });
}

function hello(){
  return "hello";
}

module.exports = {
  hello: hello,
  handleGet: handleGet
}

