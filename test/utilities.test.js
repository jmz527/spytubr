const fs = require('fs')
const chai = require(`chai`)

const main_util = require(`../util/main_util`)
const file_util = require(`../util/file_util`)

// MAIN UTIL LIBRARY
// =========================================================== //
describe(`Main utility library`, () => {

	it(`GenUUID returns a string`, () => {
		chai.expect(main_util.methods.genUUID()).to.be.a(`string`);
	})

	it(`GenUUID generates proper UUIDs`, () => {
		let regex, uuid
			regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
			uuid = main_util.methods.genUUID()

		chai.expect(regex.test(uuid)).to.be.true;
	})

	it(`_escapesString escapes single-quotes`, () => {
		let str = main_util.methods._escapeString(`This is a demo string with 'single-quotes'`)

		chai.assert.equal(str, `This is a demo string with \\\'single-quotes\\\'`)
	})

	it(`_escapesString escapes double-quotes`, () => {
		let str = main_util.methods._escapeString(`This is a demo string with "double-quotes"`)

		chai.assert.equal(str, `This is a demo string with \\"double-quotes\\"`)
	})

})



// // FILE UTIL LIBRARY
// // =========================================================== //
// const htmlMin = `<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`;

// describe(`File utility library`, () => {

// 	it(`minifyHTML minifies html`, () => {

// 		file_util.methods.minifyHTML(`../htmls/test_beauty.html`)

// 		fs.readFile(`../htmls/test_beauty.html`, 'utf8', function (err, html) {
// 			if (err) throw err;

// 			chai.assert.equal(html, htmlMin)

// 		})

// 	});

// 	it(`beautifyHTML beautifies html`, () => {

// 		file_util.methods.beautifyHTML(`../htmls/test_mini.html`)

// 		fs.readFile(`../htmls/test_mini.html`, 'utf8', function (err, html) {
// 			if (err) throw err;

// 			chai.assert.equal(html, htmlOG)

// 		})

// 	});


// 	it(`saveHTML saves html to a file properly`, () => {

// 		// file_util.methods.saveHTML()

// 		chai.assert.lengthOf(`tri`, 3);
// 	})

// 	it(`saveJSON saves json to a file properly`, () => {

// 		// file_util.methods.saveJSON()

// 		chai.assert.lengthOf(`tri`, 3);
// 	})

// 	it(`readJSON reads json from a file properly`, () => {

// 		file_util.methods.readJSON(`yts_daily_show`, (json) => {

// 			chai.expect(json).to.be.a(`object`)
// 		})

// 	})

// });