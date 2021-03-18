const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserChema = new Schema({
	realName: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
});

UserChema.methods.encryptPassword = async function (password) {
	const salt = await bcrypt.getSalt(15);
	return await bcrypt.hash(password, salt);
};

UserChema.methods.decryptPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserChema);
