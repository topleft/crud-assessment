var express = require('express');
var router = express.Router();
var Item = require('../models/item.js');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});


router.get('/', function(req, res, next) {
  	Item.findQ({})
		.then(function(response){ res.json(response);})
		.catch(function(err){ res.json(err);})
  	.done();
});

router.post('/:name/:type', function(req, res, next) {
	var newItem = new Item({name: req.params.name, type: req.params.type}); 
	newItem.save();
  res.json(newItem);
});

router.put('/:id/:name/:type', function(req, res, next) {
	var id = {_id: req.params.id};
	var update = {name: req.params.name, type: req.params.type}
	var options = {new: true};

	Item.findByIdAndUpdateQ(id, update, options)
	.then(function(response){res.json(response)})
	.catch(function(error){res.json(error)})
	.done();

});

router.delete('/:id', function(req, res, next) {
	var id = {_id: req.params.id};
	Item.findByIdAndRemoveQ(id)
	.then(function(response){res.json({message: 'Item Deleted', res: response})})
	.catch(function(error){res.json(error)});
});



module.exports = router;
