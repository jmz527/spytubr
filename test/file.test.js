const chai = require(`chai`)

// YTS JSON & HTML FILES
// =========================================================== //
const ytsJSON = require(`../feeds/json_tester.json`);

describe(`YTS JSON & HTML Files`, () => {

	it(`yts feed was saved properly`, () => {

		chai.expect(ytsJSON).to.be.a(`object`)
		chai.expect(ytsJSON).to.have.property(`user`)
		chai.expect(ytsJSON).to.have.property(`upvoted`)
		chai.expect(ytsJSON.upvoted).to.have.property(`data`)
		chai.expect(ytsJSON.upvoted.data[0]).to.have.property(`id`)
		chai.expect(ytsJSON.upvoted.data[0]).to.have.property(`fullname`)

		chai.expect(ytsJSON.user).to.be.a(`string`)
		chai.expect(ytsJSON.upvoted).to.be.a(`object`)
		chai.expect(ytsJSON.upvoted.data).to.be.a(`array`)
		chai.expect(ytsJSON.upvoted.data[0]).to.be.a(`object`)
		chai.expect(ytsJSON.upvoted.data[0].id).to.be.a(`string`)
		chai.expect(ytsJSON.upvoted.data[0].fullname).to.be.a(`string`)

		chai.expect(ytsJSON.user).to.equal(`james527`)
		chai.expect(ytsJSON.upvoted.data[0].id).to.equal(`thing_t3_739o1w`)
		chai.expect(ytsJSON.upvoted.data[0].fullname).to.equal(`t3_739o1w`)

	});

})
