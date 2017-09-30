var file_util = require('./util/file_util')

// console.log(process.argv[2], process.argv[3])

// add to end of routeshello
file_util.methods.readJSON('../routes', function (routes) { // console.log(routes)
  routes.yts.push(`/yts/${process.argv[3]}`)

  file_util.methods.saveJSON('../routes', routes)
})
