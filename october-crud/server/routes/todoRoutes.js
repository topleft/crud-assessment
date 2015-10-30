var express = require('express');
var router = express.Router();
var pg = require('pg');
var path = require('path');
var connectionString = ('postgres://petej@localhost:5432/todo');

router.post('/', function(req, res) {
    console.log("hello")
    var results = [];
    var data = {text: req.body.text, complete: false};
    pg.connect(connectionString, function(err, client, done) {
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        client.query("INSERT INTO items(text, complete) values($1, $2)", [data.text, data.complete]);
        var query = client.query("SELECT * FROM items ORDER BY id ASC");
        query.on('row', function(row) {
            results.push(row);
        });
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

module.exports = router;