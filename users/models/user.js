var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
	name:String,
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},


	password: {
		type: String,
		required: true,
		//		minlength: 8
	}

});

module.exports = mongoose.model("User", userSchema);
