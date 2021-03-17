const express = require("express");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("port", process.env.PORT);
app.set("views", path.join(__dirname, "views"));
app.engine(
	".hbs",
	hbs({
		defaultLayout: "main",
		layoutsDir: path.join(app.get("views"), "layouts"),
		partialsDir: path.join(app.get("views"), "partials"),
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");

app.use(morgan("dev"));

app.use(require("./routes/routes"));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
	res.render("404");
});

module.exports = app;