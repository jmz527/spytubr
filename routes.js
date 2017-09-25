var express = require('express');
var router = express.Router();

// HELPER VARS
//--------------------------------------------------------------------------//
// const cls_routes = require('./cls/routes.json')
// const igrm_routes = require('./igrm/routes.json')
// const rdts_routes = require('./rdts/routes.json')
const yts_routes = require('./yts/routes.json')


let all_routes = {
	// "cls": cls_routes.cls,
	// "igrms": igrm_routes.igrms,
	// "rdts": rdts_routes.rdts,
	"yts": yts_routes.yts
}

// MAIN ROUTES
//--------------------------------------------------------------------------//	
router.get('/', function(req, res) { // landing page
	res.render('home', { title: 'spydr', routes: all_routes })
})

router.get('/root', (req, res) => { res.redirect('/') })
router.get('/main', (req, res) => { res.redirect('/') })

module.exports = router;
