var file_util = require("./util/file_util");

// console.log(process.argv[2], process.argv[3])

var ytsID = process.argv[2];
var ytsNAME = process.argv[2];

// add to end of routeshello
file_util.methods.readJSON("./yts/routes", function (feed) {
	console.log(feed)
});