const express = require(`express`)
const api = express()
const http = require(`http`)
const path = require(`path`)
const logger = require(`morgan`)

/* This will allow db to run your api smoothly but it won't break other execution environment */
const host = process.env.HOST || `localhost`
const port = process.env.PORT || process.argv[2] || 1337

const api_routes = require(`./api_router.js`)
const yts_routes = require(`./yts/api_routes`)

api.set(`yts`, path.join(__dirname, `yts`))

api.use(logger(`dev`))

// Setting routes
api.use(`/`, api_routes)
api.use(`/yts`, yts_routes)

api.listen(port, host, function () {
	console.log(`API listening on port ${host}:${port}`)
})