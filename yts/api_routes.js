const express = require(`express`)
const bodyParser = require(`body-parser`)
const genUUID = require(`../util/main_util`).methods.genUUID
const cp = require(`child_process`)

module.exports = (function () {
  `use strict`

  const router = express.Router()
  router.use(bodyParser.json()) // support json encoded bodies
  router.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

	// ROUTES
	// -------------------------------------------------------------- //
  router.get(`/`, (req, res) => {
    res.send(`YTS API HOME`)
  })

	// JSON MANIPULATION ACTIONS
	// ----------------------------------------------------------//
  router.get(`/:channel/watched/:index`, (req, res) => {
    cp.exec(`./yts/.watched.bash ${req.params.channel} ${req.params.index}`, (err, stdout, stderr) => {
      console.log(stdout)
      if (err) throw err

      res.jsonp({ 'status': 200 })
    })
  })

  router.get(`/:channel/active/:index`, (req, res) => {
    cp.exec(`./yts/.active.bash ${req.params.channel} ${req.params.index}`, (err, stdout, stderr) => {
      console.log(stdout)
      if (err) throw err

      res.jsonp({ 'status': 200 })
    })
  })

  return router
})()
