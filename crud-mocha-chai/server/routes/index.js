var express = require('express');
var router = express.Router();
var Item = require("../models/items");


router.get('/items', function(req, res, next) {
	Item.find({}, function(err, data){
		if (err){
			res.json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = router;
