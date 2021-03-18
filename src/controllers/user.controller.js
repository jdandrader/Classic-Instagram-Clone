const homeController = (req, res) => {
	res.render("index", {
		description: "Simple clone of Instagram only for practice propousessss",
		title: "Instagram Clone",
		user: {
			authenticated: true,
		},
	});
}

const profileController = (req, res) => {
	res.render("layouts/profile", {
		description: "Nicolas Jimenez profile",
		title: "Nicolas Jimenez | Instagram",
	});
};


module.exports = {
	homeController,
	profileController
}
