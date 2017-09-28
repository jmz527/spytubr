const fs = require('fs')
const beautify_html = require('js-beautify').html
const minify = require('html-minifier').minify

const methods = (function () {
  return {

		// HTML BEAUTIFY
		// =========================================================== //
    beautifyHTML: function (html_path) { // console.log(html_path);
      const bConfig = {
        'indent_size': 4,
        'html': {
          'end_with_newline': true,
          'js': { 'indent_size': 2 },
          'css': { 'indent_size': 2 }
        },
        'css': { 'indent_size': 1 },
        'js': { 'preserve-newlines': true }
      }

      fs.readFile(html_path, 'utf8', function (err, data) {
        if (err) throw err

        let newHTML = beautify_html(data, bConfig)

        fs.writeFile(html_path, newHTML, function (err) {
          console.log(`\x1b[36m%s\x1b[0m`, `HTML file successfully beautified!`)
          console.log(`\x1b[36m%s\x1b[0m`, `Check your project directory for the ${html_path} file`)
        })
      })
    },

		// HTML MINIFY
		// =========================================================== //
    minifyHTML: function (html_path) { // console.log(html_path);
		// https://kangax.github.io/html-minifier/
		// https://github.com/kangax/html-minifier

      const mConfig = {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        processScripts: ['text/html'],
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeTagWhitespace: true,
        trimCustomFragments: true
      }

      fs.readFile(html_path, 'utf8', function (err, data) {
        if (err) throw err

        let newHTML = minify(data, mConfig)

        fs.writeFile(html_path, newHTML, function (err) {
          console.log(`\x1b[36m%s\x1b[0m`, `HTML file successfully minified!`)
          console.log(`\x1b[36m%s\x1b[0m`, `Check your project directory for the ${html_path} file`)
        })
      })
    },

		// HTML SAVE
		// =========================================================== //
    saveHTML: function (fileName, html) {
      if (!fs.existsSync(`./htmls/${fileName}.html`)) {
        console.log(`HTML example file not found`)

        fs.writeFile(`./htmls/${fileName}.html`, html, function (err) {
          console.log(`\x1b[36m%s\x1b[0m`, `HTML file successfully written!`)
          console.log(`\x1b[36m%s\x1b[0m`, `Check your project directory for the ./htmls/${fileName}.html file`)
        })
      }
    },

		// JSON SAVE
		// =========================================================== //
    saveJSON: function (fileName, json) {
      fs.writeFile(`./feeds/${fileName}.json`, JSON.stringify(json, null, 4), function (err) {
        console.log(`\x1b[36m%s\x1b[0m`, `JSON file successfully written!`)
        console.log(`\x1b[36m%s\x1b[0m`, `Check your project directory for the ./feeds/${fileName}.json file`)
      })
    },

		// JSON READ
		// =========================================================== //
    readJSON: function (fileName, callback) {
			// If "all" file doesn't exist, error
      if (fs.existsSync(`./feeds/${fileName}.json`)) {
        let new_json = require(`../feeds/${fileName}.json`)

        callback(new_json)
      } else {
        console.log(`\x1b[31m%s\x1b[0m`, `ERROR: Something went wrong`)  // red
        console.log(`\x1b[31m%s\x1b[0m`, `If you're missing this file: "./feeds/${fileName}.json"`)
        console.log(`\x1b[31m%s\x1b[0m`, `Try running "npm run fetch"`)
      }
    }

  }
}())

exports.methods = methods
