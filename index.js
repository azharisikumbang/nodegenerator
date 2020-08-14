const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || "3000"

const routes = require(path.join(__dirname, "config/routes.js"))
const appConfig = require(path.join(__dirname, "config/app.config.js"))

app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

let currentController, controllerHandler

for(r in routes) {
	currentController = routes[r].split("@")
	controllerHandler = require("./controllers/" + currentController[0] + ".js")

	app.get(r, controllerHandler[currentController[1]])

}

app.listen(port, () => {
	console.log('app running')
})