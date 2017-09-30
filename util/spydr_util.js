const fs = require(`fs`)
var file_util = require('./file_util')

const methods = (function () {
  return {
    matches: (arg1, arg2) => { return arg1 == arg2 },
    checkForAllFile: (file_path, fresh_obj) => { // If "all" file doesn't exist, create it
      if (!fs.existsSync(`./${file_path}`)) {
        console.log(`${file_path} file not found`)

        return fresh_obj
      } else {
        return require(`../${file_path}`)
      }
    },
    addRoute: (file_name) => {
      file_util.methods.readJSON('../routes', function (routes) { // console.log(routes)
        routes.yts.push(`/yts/${file_name}`)

        file_util.methods.saveJSON('../routes', routes)
      })
    }
  }
}())

exports.methods = methods
