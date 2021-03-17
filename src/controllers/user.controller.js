const homeController = (req, res) => {
	res.render("index", {
		title: "Instagram Clone",
		user: {
			authenticated: true
		}
	});
}

const profileController = (req, res) => {
	res.render("layouts/profile", {
		title: "Nicolas Jimenez | Instagram",
	});
};


module.exports = {
	homeController,
	profileController
}
