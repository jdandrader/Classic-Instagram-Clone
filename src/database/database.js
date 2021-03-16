const mongoose = require("mongoose");

const connection = async () => {
	try {
		await mongoose.connect(process.env.DATABASE, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("Db connected");
	} catch (err) {
		console.errror(err);
		throw new Error("Error al conectar la db");
	}
};

module.exports = connection;
