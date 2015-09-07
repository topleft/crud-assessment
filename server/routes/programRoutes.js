var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Program Crud' });
});



module.exports = router;