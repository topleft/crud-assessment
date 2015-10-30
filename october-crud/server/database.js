console.log("popop");
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://petej@localhost:5432/todo';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE IF NOT EXISTS items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');

query.on('end', function() { client.end(); });