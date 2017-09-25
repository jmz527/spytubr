const chai = require(`chai`)


// YTS JSON & HTML FILES
// =========================================================== //
const yts_json = require(`../feeds/yts_daily_show.json`);
const yts_all_json = require(`../feeds/yts_daily_show_all.json`);

describe(`YTS JSON & HTML Files`, () => {

	it(`yts feed was saved properly`, () => {

		chai.expect(yts_json).to.be.a(`object`)
		chai.expect(yts_json).to.have.property(`channel`)
		chai.expect(yts_json).to.have.property(`channel_id`)
		chai.expect(yts_json).to.have.property(`data`)

		chai.expect(yts_json.channel).to.be.a(`string`)
		chai.expect(yts_json.channel).to.equal(`daily_show`)

		chai.expect(yts_json.channel_id).to.be.a(`string`)
		chai.expect(yts_json.channel_id).to.equal(`UCwWhs_6x42TyRM4Wstoq8HA`) 

		chai.expect(yts_json.data).to.be.a(`array`)

		chai.expect(yts_json.data[0]).to.be.a(`object`)
		chai.expect(yts_json.data[0]).to.have.property(`id`)
		chai.expect(yts_json.data[0]).to.have.property(`title`)
		chai.expect(yts_json.data[0]).to.have.property(`href`)
		chai.expect(yts_json.data[0]).to.have.property(`duration`)
		chai.expect(yts_json.data[0]).to.have.property(`views`)

		chai.expect(yts_json.data[0].id).to.be.a(`string`)
		chai.expect(yts_json.data[0].title).to.be.a(`string`)
		chai.expect(yts_json.data[0].href).to.be.a(`string`)
		chai.expect(yts_json.data[0].duration).to.be.a(`string`)
		chai.expect(yts_json.data[0].views).to.be.a(`string`)

	});

	it(`yts_all.json feed was saved properly`, () => {

		chai.expect(yts_all_json).to.be.a(`object`)
		chai.expect(yts_all_json).to.have.property(`channel`)
		chai.expect(yts_all_json).to.have.property(`channel_id`)
		chai.expect(yts_all_json).to.have.property(`data`)

		chai.expect(yts_all_json.channel).to.be.a(`string`)
		chai.expect(yts_all_json.channel).to.equal(`daily_show`)

		chai.expect(yts_all_json.channel_id).to.be.a(`string`)
		chai.expect(yts_all_json.channel_id).to.equal(`UCwWhs_6x42TyRM4Wstoq8HA`) 

		chai.expect(yts_all_json.data).to.be.a(`array`)

		chai.expect(yts_all_json.data[0]).to.be.a(`object`)
		chai.expect(yts_all_json.data[0]).to.have.property(`id`)
		chai.expect(yts_all_json.data[0]).to.have.property(`title`)
		chai.expect(yts_all_json.data[0]).to.have.property(`href`)
		chai.expect(yts_all_json.data[0]).to.have.property(`duration`)
		chai.expect(yts_all_json.data[0]).to.have.property(`views`)
		chai.expect(yts_all_json.data[0]).to.have.property(`active`)
		chai.expect(yts_all_json.data[0]).to.have.property(`watched`)

		chai.expect(yts_all_json.data[0].id).to.be.a(`string`)
		chai.expect(yts_all_json.data[0].title).to.be.a(`string`)
		chai.expect(yts_all_json.data[0].href).to.be.a(`string`)
		chai.expect(yts_all_json.data[0].duration).to.be.a(`string`)
		chai.expect(yts_all_json.data[0].views).to.be.a(`string`)
		chai.expect(yts_all_json.data[0].active).to.be.a(`boolean`)
		chai.expect(yts_all_json.data[0].watched).to.be.a(`boolean`)

	});

})

