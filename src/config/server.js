const express = require("express");
const http = require("http");
const cors = require("cors");
const hbs = require("hbs");
const connection = require("../database/database");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.server = http.createServer(this.app);
		connection();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.set("view engine", "hbs");
		hbs.registerPartials(__dirname + "/components/", function (err) {
			console.log(err);
		});
	}

	routes() {
		// api
		this.app.use("/api/v1/auth", require('../routes/routes'));

		// application
	}

	start() {
		this.middlewares();
		this.routes();
		this.server.listen(this.port, () => {
			console.log("Server running:", this.port);
		});
	}
}

module.exports = Server;
