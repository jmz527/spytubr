const express = require('express')
const bodyParser = require(`body-parser`)
const cp = require(`child_process`)

// HELPER VARS
// --------------------------------------------------------------------------//
const router = express.Router()
router.use(bodyParser.json()) // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
const routes = require(`./routes.json`)

// MAIN ROUTES
// --------------------------------------------------------------------------//
router.get('/', function (req, res) { // landing page
  res.render('home', { title: 'tubr', routes: routes })
})
router.get('/root', (req, res) => { res.redirect('/') })
router.get('/main', (req, res) => { res.redirect('/') })

router.get(`/yts/`, function (req, res) { // landing page
  res.render(`home`, { title: `yts routes`, routes: routes })
})

router.get(`/yts/:channel`, (req, res) => {
  let yts = require(`./feeds/yts_${req.params.channel}_all.json`)

  res.render(`yts`, { title: `yts`, channel: req.params.channel, yts: yts.data })
})

// API ROUTES
// -------------------------------------------------------------- //
router.get(`/api/`, (req, res) => {
  res.send(`YTS API HOME`)
})

router.get(`/api/:channel/watched/:index`, (req, res) => {
  cp.exec(`./.watched.bash ${req.params.channel} ${req.params.index}`, (err, stdout, stderr) => {
    console.log(stdout)
    if (err) throw err

    res.jsonp({ 'status': 200 })
  })
})

router.get(`/api/:channel/active/:index`, (req, res) => {
  cp.exec(`./.active.bash ${req.params.channel} ${req.params.index}`, (err, stdout, stderr) => {
    console.log(stdout)
    if (err) throw err

    res.jsonp({ 'status': 200 })
  })
})

module.exports = router
