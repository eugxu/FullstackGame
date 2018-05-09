var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	username: {type: String, unique: true}
	, sheher: {type: Boolean}
	, hehim: {type: Boolean}
	, theythem: {type: Boolean}
	, sand: {type: String}
	, password: {type: String}
	, salt: {type: String}
	, avatar: {type: String}
}));

exports.getModel = function() {
	return model;
}

salt: {type: String}
