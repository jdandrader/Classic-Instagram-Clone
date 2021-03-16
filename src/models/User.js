const { Schema, model } = require("mongoose");

const UserChema = new Schema({
	userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

module.exports = model("User", UserChema);
