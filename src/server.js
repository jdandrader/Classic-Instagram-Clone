const express = require("express");
const hbs = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const favicon = require("express-favicon");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./config/passport");

const app = express();

app.set("port", process.env.PORT);
app.use(express.urlencoded({ extended: false }));
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

app.use(cookieParser(process.eventNames.COOKIE_SECRET));

app.use(
	session({
		secret: process.env.COOKIE_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	res.locals.user = req.user || null;
	next();
});

app.use(favicon(__dirname + "/public/favicon.ico"));

app.use("/", require("./routes/user/user.routes"));
app.use("/auth", require("./routes/auth/auth.routes"));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
	res.render("404");
});

module.exports = app;
