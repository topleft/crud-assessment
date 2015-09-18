process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var Item = require("../server/models/items");
var should = chai.should();
chai.use(chaiHttp);


describe("Items", function() {
	Item.collection.drop();
	var id;


	beforeEach(function(done){
		var newItem = new Item({
			name: "mop",
			location: "closet"
		});
		id = newItem._id;
		newItem.save(function(err){
			done();
		});
	});
	afterEach(function(done){
		Item.collection.drop();
		done();
	});

	
	it('should list ALL blobs on /blobs GET',
		function(done){
			chai.request(server)
				.get('/items')
				.end(function(err, res){
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.be.a('array');
					res.body[0].name.should.be.a('string');
					res.body[0].name.should.equal('mop');
					res.body[0].location.should.be.a('string');
					res.body[0].location.should.equal('closet');
					done();
				});
		});
  it('should list a SINGLE blob on /blob/<id> GET',
  	function(done){
	  		chai.request(server)	
	  			.get('/items/'+ id)
	  			.end(function(err, res){
	  				res.should.have.status(200);
	  				res.should.be.json;
	  				res.body.should.be.a('array');
	  				res.body[0].should.be.a('object');
	  				res.body[0].name.should.be.a('string');
						res.body[0].name.should.equal('mop');
						res.body[0].location.should.be.a('string');
						res.body[0].location.should.equal('closet');
						done();
	  			});
  			});
  it('should add a SINGLE blob on /blobs POST',
  	function(done){
  		chai.request(server)
  		.post('/items/chair/livingroom')
  		.end(function(err, res){
  			res.should.have.status(200);
  			res.should.be.json;
				res.body.should.be.a('object');
				res.body.name.should.be.a('string');
				res.body.name.should.equal('chair');
				res.body.location.should.be.a('string');
				res.body.location.should.equal('livingroom');
				done();
  		});
  	}); 


  it('should update a SINGLE blob on /blob/<id> PUT',
  	function(done){
	  		chai.request(server)	
	  			.put('/items/'+ id +'/broom/closet')
	  			.end(function(err, res){
	  				res.should.have.status(200);
	  				res.should.be.json;
	  				res.body.should.be.a('object');
	  				res.body.name.should.be.a('string');
						res.body.name.should.equal('broom');
						res.body.location.should.be.a('string');
						res.body.location.should.equal('closet');
						done();
	  			})
  			});

  it('should delete a SINGLE blob on /blob/<id> DELETE', 
  	function(done){
	  		chai.request(server)	
	  			.delete('/items/'+ id)
	  			.end(function(err, res){
	  				console.log(res.body);
	  				res.should.have.status(200);
	  				res.should.be.json;
	  				res.body.should.be.a('object');
						done();
  			});
  		});


// closes describe
});


