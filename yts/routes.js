var express = require(`express`)
var router = express.Router()

// HELPER VARS
// --------------------------------------------------------------------------//
const cp = require(`child_process`)
const routes = require(`./routes.json`)

// MAIN ROUTES
// --------------------------------------------------------------------------//
router.get(`/`, function (req, res) { // landing page
  res.render(`home`, { title: `yts routes`, routes: routes })
})

router.get(`/:channel`, (req, res) => {
  let yts = require(`../feeds/yts_` + req.params.channel + `_all.json`)

  res.render(`yts`, { title: `yts`, channel: req.params.channel, yts: yts.data })
})

module.exports = router
