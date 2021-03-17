const { Schema, model } = require("mongoose");

const PublicationSchema = new Schema({
	image: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
});

module.exports = model("Publication", PublicationSchema);
