var mongoose = require('mongoose');

var model = mongoose.model('user', new mongoose.Schema({
	username: {type: String, unique: true}
	, sheher: {type: Boolean, unique: true}
	, hehim: {type: Boolean, unique: true}
	, theythem: {type: Boolean, unique: true}
	, password: {type: String}

}));

exports.getModel = function() {
	return model;
}
