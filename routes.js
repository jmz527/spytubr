var express = require('express')
var router = express.Router()

// HELPER VARS
// --------------------------------------------------------------------------//
const yts_routes = require('./yts/routes.json')

let all_routes = {
  'yts': yts_routes.yts
}

// MAIN ROUTES
// --------------------------------------------------------------------------//
router.get('/', function (req, res) { // landing page
  res.render('home', { title: 'tubr', routes: all_routes })
})

router.get('/root', (req, res) => { res.redirect('/') })
router.get('/main', (req, res) => { res.redirect('/') })

module.exports = router
