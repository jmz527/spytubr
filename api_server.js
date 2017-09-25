const express = require(`express`)
const api = express()
const http = require(`http`)
const path = require(`path`)
const logger = require(`morgan`)

/* This will allow db to run your api smoothly but it won't break other execution environment */
const host = process.env.HOST || `localhost`
const port = process.env.PORT || process.argv[2] || 1337

const api_routes = require(`./api_router.js`)
const cls_routes = require(`./cls/api_routes`)
const igrm_routes = require(`./igrm/api_routes`)
const rdts_routes = require(`./rdts/api_routes`)
const yts_routes = require(`./yts/api_routes`)

api.set(`cls`, path.join(__dirname, `cls`))
api.set(`igrm`, path.join(__dirname, `igrm`))
api.set(`rdts`, path.join(__dirname, `rdts`))
api.set(`yts`, path.join(__dirname, `yts`))

api.use(logger(`dev`))

// Setting routes
api.use(`/`, api_routes)
api.use(`/cls`, cls_routes)
api.use(`/igrms`, igrm_routes)
api.use(`/rdts`, rdts_routes)
api.use(`/yts`, yts_routes)

api.listen(port, host, function () {
	console.log(`API listening on port ${host}:${port}`)
})