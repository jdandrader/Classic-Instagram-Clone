const express = require("express");
const http = require("http");
const cors = require("cors");
const connection = require("../database/database");
const hbs = require("hbs");
const path = require('path')

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
		this.app.use(express.static(path.join(__dirname, 'public')));
		this.app.set("view engine", "hbs");
		this.app.set("views", path.join(__dirname + "views"));
		hbs.registerPartials(__dirname + "/views/partials", function (err) {});
	}

	routes() {
		// api


		// application
		this.app.use("/", require("../routes/routes"));
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
