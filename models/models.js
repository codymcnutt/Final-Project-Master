var mongoose = require('mongoose');

// Define our Schema for the DB
var CharacterSchema = mongoose.Schema({

	name			: {type : String},
	email			: {type : String},
	character		: {type : String},
	

});

// Being modelling the collection
module.exports = mongoose.model('Character', CharacterSchema);

// Character = Hero in other files
