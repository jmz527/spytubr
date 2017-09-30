const fs = require('fs')
// const cp = require(`child_process`)
const chai = require(`chai`)

const mainUtil = require(`../util/main_util`)
const fileUtil = require(`../util/file_util`)

// MAIN UTIL LIBRARY
// =========================================================== //
describe(`Main utility library`, () => {
  it(`GenUUID returns a string`, () => {
    chai.expect(mainUtil.methods.genUUID()).to.be.a(`string`)
  })

  it(`GenUUID generates proper UUIDs`, () => {
    let regex, uuid, pass
    regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    uuid = mainUtil.methods.genUUID()
    pass = regex.test(uuid)

    chai.expect(uuid).to.be.a(`string`)
    chai.expect(pass).to.be.true
  })

  it(`_escapesString escapes single-quotes`, () => {
    let str = mainUtil.methods._escapeString(`This is a demo string with 'single-quotes'`)

    chai.expect(str).to.be.a(`string`)
    chai.assert.equal(str, `This is a demo string with \\'single-quotes\\'`)
  })

  it(`_escapesString escapes double-quotes`, () => {
    let str = mainUtil.methods._escapeString(`This is a demo string with "double-quotes"`)

    chai.expect(str).to.be.a(`string`)
    chai.assert.equal(str, `This is a demo string with \\"double-quotes\\"`)
  })

  it(`flattenJSON flattens json`, () => {
    fileUtil.methods.readJSON(`json_tester`, (json) => {
      let flatJSON = mainUtil.methods.flattenJSON(json)

      chai.expect(flatJSON).to.be.a(`object`)
      chai.expect(flatJSON).to.have.property(`user`)
      chai.expect(flatJSON).to.have.property(`upvoted.data[0].id`)
      chai.expect(flatJSON).to.have.property(`upvoted.data[0].fullname`)

      chai.expect(flatJSON[`user`]).to.be.a(`string`)
      chai.expect(flatJSON[`upvoted.data[0].id`]).to.be.a(`string`)
      chai.expect(flatJSON[`upvoted.data[0].fullname`]).to.be.a(`string`)
    })
  })

  it(`unflattenJSON unflattens json`, () => {
    fileUtil.methods.readJSON(`flat_json_tester`, (flatJSON) => {
      let json = mainUtil.methods.unflattenJSON(flatJSON)

      chai.expect(json).to.be.a(`object`)
      chai.expect(json).to.have.property(`user`)
      chai.expect(json).to.have.property(`upvoted`)
      chai.expect(json.upvoted).to.have.property(`data`)
      chai.expect(json.upvoted.data[0]).to.have.property(`id`)
      chai.expect(json.upvoted.data[0]).to.have.property(`fullname`)

      chai.expect(json.user).to.be.a(`string`)
      chai.expect(json.upvoted.data).to.be.a(`array`)
      chai.expect(json.upvoted.data[0].id).to.be.a(`string`)
      chai.expect(json.upvoted.data[0].fullname).to.be.a(`string`)
    })
  })
})

// FILE UTIL LIBRARY
// =========================================================== //
const htmlMin = `<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`

describe(`File utility library`, () => {

  fileUtil.methods.saveHTML(`saveHTML_test`, htmlMin)
  fileUtil.methods.saveJSON(`saveJSON_test`, { test: `JSON` })

  it(`Html test files exist`, () => {
    chai.expect(fs.existsSync(`./htmls/html_min.html`)).to.be.true
    chai.expect(fs.existsSync(`./htmls/test.html`)).to.be.true
    chai.expect(fs.existsSync(`./htmls/test_beauty.html`)).to.be.true
    chai.expect(fs.existsSync(`./htmls/test_original.html`)).to.be.true
    chai.expect(fs.existsSync(`./feeds/json_tester.json`)).to.be.true

    chai.expect(fs.existsSync(`./htmls/not_a_file.html`)).to.be.false
  })

  it(`saveHTML saves html to a file properly`, () => {
    chai.expect(fs.existsSync(`./htmls/saveHTML_test.html`)).to.be.true
  })

  it(`saveJSON saves json to a file properly`, () => {
    chai.expect(fs.existsSync(`./feeds/saveJSON_test.json`)).to.be.true
  })

  it(`readJSON reads json from a file properly`, () => {
    fileUtil.methods.readJSON(`saveJSON_test`, (json) => {
      chai.expect(json).to.be.a(`object`)
      chai.expect(json).to.have.property(`test`)
      chai.expect(json.test).to.be.a(`string`)
    })
  })

  // // Why doesn't this work? vvvv
  // setTimeout(() => {
  //   cp.exec(`rm ./htmls/saveHTML_test.html`)
  //   cp.exec(`rm ./feeds/saveJSON_test.json`)
  // }, 5000)
})
