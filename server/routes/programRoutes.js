var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Program Crud' });
// });

router.get('/programs', function(req, res, next) {
  crud.handleGet(function(data){
    res.json(data);
  });
});

router.post('/programs', function(req, res, next) {
  var response = crud.handlePost(req.body.name, req.body.language);
  res.json(response);
});

router.get('/programs/:id', function(req, res, next) {
  crud.handleGetOne(req.params.id, function(data){
    res.json(data);
  });
});

router.put('/programs/:id', function(req, res, next) {
  crud.handlePut(req.params.id, req.body.name, req.body.language, function(program){
    res.json(program);
  });
});

router.delete('/programs/:id', function(req, res, next) {
  crud.handleDelete(req.params.id, function(message){
    res.json(message);
  })
});

module.exports = router;