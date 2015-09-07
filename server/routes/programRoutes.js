var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Program Crud' });
});

router.get('/programs', function(req, res, next) {
  crud.handleGet(function(err, data){
    res.json(data);
  });
});


router.post('/programs', function(req, res, next) {
  var response = crud.handlePost(req.body.name, req.body.language);
  res.json(response);
});

router.put('/programs/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.delete('/programs/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;