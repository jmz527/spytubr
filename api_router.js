const express = require(`express`)
const bodyParser = require(`body-parser`)

module.exports = (function() {
	`use strict`;

	const router = express.Router()
		router.use(bodyParser.json()) // support json encoded bodies
		router.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// ROUTES
// -------------------------------------------------------------- //
	router.get(`/`, function(req, res) {
		res.send(`API HOME`)
	})

	router.get(`/home`, function (req, res) {
		res.redirect(`/`)
	})

		return router
})()