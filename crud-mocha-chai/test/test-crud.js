process.env.NODE_ENV = 'test';

var chai = require("chai");
var chaiHttp = require('chai-http');
var server = require("../server/app");
var Item = require("../server/models/items");
var should = chai.should();
chai.use(chaiHttp);


describe("Items", function() {
	Item.collection.drop();


	beforeEach(function(done){
		var newItem = new Item({
			name: "mop",
			location: "closet"
		});
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
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST'); it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');



// closes describe
});




