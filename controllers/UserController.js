const UserController = {

	indexAction(req, res) {
		res.render("index", { title: 'UserController' })
	}

}

module.exports = UserController