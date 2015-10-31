var mongoose = require('mongoose');

// Define our Schema for the DB
var CharacterSchema = mongoose.Schema({

	name					: {type : String},
	email					: {type : String},
	currentCharacter		: {}, 
	deadGuys				: {type : Array, default: []}
	// empty object denotes it could change - typless property
	

});

// Being modelling the collection
module.exports = mongoose.model('Character', CharacterSchema);

// Character = Hero in other files
