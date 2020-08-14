const HomeController = {

	indexAction(req, res) {
		res.render("index", { title: 'HomeController' })
	}

}

module.exports = HomeController