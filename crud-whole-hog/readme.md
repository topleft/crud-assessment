package.json:
* added mongoose and mongoose q (for promises)

app.js
* added require database to top of file

created database.js
* added item schema
* connected to the database with mongo

created logic/
* added crud.js
* required var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
* and database.js

created test/
* added crud-test.js
	* added requires and first should/it
* added test.html
	* inside html linked routes/indes.js

added to package.json (devDependencies ie --save-dev)
	* mocha and chai "chai": "^3.2.0", "chai-http": "^1.0.0"

	run npm install

in app.js
* require config file, mongoose, connect to db with proccess.env

added _config.js
	* added cnofig object for connecting to proper database (test or dev)
	* 