const passport = require("passport");
const PassportLocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
	new PassportLocalStrategy(
		{
			usernameField: "userName",
			passwordField: "password",
		},
		async (userName, password, done) => {
			const user = await User.findOne({ userName });
			if (!user) {
				return done(null, false, { message: "Not exist" });
			} else {
				const match = await user.comparePasswords(password);

				if (match) {
					return done(null, user);
				} else {
					return done(null, false, { message: "User or password wrong" });
				}
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
