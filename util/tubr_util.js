const fs = require(`fs`)

const methods = (function () {
  return {
    matches: (arg1, arg2) => { return arg1 == arg2 },
    checkForAllFile: (filePath, freshObj) => { // If "all" file doesn't exist, create it
      if (!fs.existsSync(`./${filePath}`)) { console.log(`${filePath} file not found`)
        return freshObj
      } else {
        return require(`../${filePath}`)
      }
    }
  }
}())

exports.methods = methods
