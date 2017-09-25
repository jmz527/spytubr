const fs = require(`fs`)

const methods = (function() {
	return {
		matches: (arg1, arg2) => { return arg1 == arg2 },
		checkForAllFile: (file_path, fresh_obj) => { // If "all" file doesn't exist, create it

			if (!fs.existsSync(`./${file_path}`)) { console.log(`${file_path} file not found`)

				return fresh_obj

			} else {

				return require(`../${file_path}`)
			}

		}
	}
}());

exports.methods = methods;