const chai = require(`chai`)


// CLS JSON & HTML FILES
// =========================================================== //
const cls_apts = require(`../feeds/cls_apts_mnh_latest.json`);
const cls_jobs = require(`../feeds/cls_jobs_sof_latest.json`);

describe(`CLS JSON & HTML Files`, () => {

	it(`cls_apts feed was saved properly`, () => {

		chai.expect(cls_apts).to.be.a(`object`)
		chai.expect(cls_apts).to.have.property(`data`)

		chai.expect(cls_apts.data).to.be.a(`array`)
		chai.expect(cls_apts.data[0]).to.have.property(`link`)
		chai.expect(cls_apts.data[0]).to.have.property(`title`)
		chai.expect(cls_apts.data[0]).to.have.property(`datetime`)
		chai.expect(cls_apts.data[0]).to.have.property(`price`)
		chai.expect(cls_apts.data[0]).to.have.property(`house`)
		chai.expect(cls_apts.data[0]).to.have.property(`hood`)

		chai.expect(cls_apts.data[0].link).to.be.a(`string`)
		chai.expect(cls_apts.data[0].title).to.be.a(`string`)
		chai.expect(cls_apts.data[0].datetime).to.be.a(`string`)
		chai.expect(cls_apts.data[0].price).to.be.a(`string`)
		chai.expect(cls_apts.data[0].house).to.be.a(`string`)
		chai.expect(cls_apts.data[0].hood).to.be.a(`string`)


	});

	it(`cls_jobs feed was saved properly`, () => {

		chai.expect(cls_jobs).to.be.a(`object`)
		chai.expect(cls_jobs).to.have.property(`data`)

		chai.expect(cls_jobs.data).to.be.a(`array`)
		chai.expect(cls_jobs.data[0]).to.have.property(`link`)
		chai.expect(cls_jobs.data[0]).to.have.property(`title`)
		chai.expect(cls_jobs.data[0]).to.have.property(`datetime`)
		chai.expect(cls_jobs.data[0]).to.have.property(`hood`)

		chai.expect(cls_jobs.data[0].link).to.be.a(`string`)
		chai.expect(cls_jobs.data[0].title).to.be.a(`string`)
		chai.expect(cls_jobs.data[0].datetime).to.be.a(`string`)
		chai.expect(cls_jobs.data[0].hood).to.be.a(`string`)

	});

})

// IGRM JSON & HTML FILES
// =========================================================== //
const igrm_json = require(`../feeds/igrm_jmz527_all.json`);

describe(`IGRM JSON & HTML Files`, () => {

	it(`igrm feed was saved properly`, () => {

		chai.expect(igrm_json).to.be.a(`object`)
		chai.expect(igrm_json).to.have.property(`user`)
		chai.expect(igrm_json).to.have.property(`data`)

		chai.expect(igrm_json.user).to.be.a(`string`)
		chai.expect(igrm_json.data).to.be.a(`array`)

		chai.expect(igrm_json.data[0]).to.be.a(`object`)
		chai.expect(igrm_json.data[0]).to.have.property(`id`)
		chai.expect(igrm_json.data[0]).to.have.property(`code`)
		chai.expect(igrm_json.data[0]).to.have.property(`low_res_img`)
		chai.expect(igrm_json.data[0]).to.have.property(`thumb_img`)
		chai.expect(igrm_json.data[0]).to.have.property(`link`)
		chai.expect(igrm_json.data[0]).to.have.property(`loc`)
		chai.expect(igrm_json.data[0]).to.have.property(`ts`)
		chai.expect(igrm_json.data[0]).to.have.property(`cap`)

		chai.expect(igrm_json.data[0].id).to.be.a(`string`)
		chai.expect(igrm_json.data[0].code).to.be.a(`string`)
		chai.expect(igrm_json.data[0].low_res_img).to.be.a(`string`)
		chai.expect(igrm_json.data[0].thumb_img).to.be.a(`string`)
		chai.expect(igrm_json.data[0].link).to.be.a(`string`)
		chai.expect(igrm_json.data[0].ts).to.be.a(`string`)

		// chai.expect(igrm_json.data[0].loc).to.be.a(`string`) // or null?
		// chai.expect(igrm_json.data[0].cap).to.be.a(`string`) // or null?

	});

})


// RDTS JSON & HTML FILES
// =========================================================== //
const rdts_up_json = require(`../feeds/rdt_james527_upvoted.json`);
const rdts_down_json = require(`../feeds/rdt_james527_downvoted.json`);
const rdts_all_json = require(`../feeds/rdt_james527_all.json`);

describe(`RDTS JSON & HTML Files`, () => {

	it(`rdts upvote feed was saved properly`, () => {

		chai.expect(rdts_up_json).to.be.a(`object`)
		chai.expect(rdts_up_json).to.have.property(`data`)

		chai.expect(rdts_up_json.data).to.be.a(`array`)

		chai.expect(rdts_up_json.data[0]).to.be.a(`object`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`id`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`fullname`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`title`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`href`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`author`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`subreddit`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`timestamp`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`url`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`commentsCount`)
		chai.expect(rdts_up_json.data[0]).to.have.property(`score`)

		chai.expect(rdts_up_json.data[0].id).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].fullname).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].title).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].href).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].author).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].subreddit).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].timestamp).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].url).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].commentsCount).to.be.a(`string`)
		chai.expect(rdts_up_json.data[0].score).to.be.a(`string`)

	});

	it(`rdts downvote feed was saved properly`, () => {

		chai.expect(rdts_down_json).to.be.a(`object`)
		chai.expect(rdts_down_json).to.have.property(`data`)

		chai.expect(rdts_down_json.data).to.be.a(`array`)

		chai.expect(rdts_down_json.data[0]).to.be.a(`object`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`id`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`fullname`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`title`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`href`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`author`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`subreddit`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`timestamp`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`url`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`commentsCount`)
		chai.expect(rdts_down_json.data[0]).to.have.property(`score`)

		chai.expect(rdts_down_json.data[0].id).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].fullname).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].title).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].href).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].author).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].subreddit).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].timestamp).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].url).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].commentsCount).to.be.a(`string`)
		chai.expect(rdts_down_json.data[0].score).to.be.a(`string`)

	});

	it(`rdts all upvote feed was merged & saved properly`, () => {

		chai.expect(rdts_all_json).to.be.a(`object`)

		chai.expect(rdts_all_json).to.have.property(`user`)
		chai.expect(rdts_all_json).to.have.property(`upvoted`)
		chai.expect(rdts_all_json).to.have.property(`downvoted`)

		chai.expect(rdts_all_json.user).to.be.a(`string`)

		chai.expect(rdts_all_json.upvoted).to.be.a(`object`)
		chai.expect(rdts_all_json.upvoted).to.have.property(`data`)
		chai.expect(rdts_all_json.upvoted).to.have.property(`pages`)
		chai.expect(rdts_all_json.upvoted.data).to.be.a(`array`)
		chai.expect(rdts_all_json.upvoted.pages).to.be.a(`number`)

		chai.expect(rdts_all_json.downvoted).to.be.a(`object`)
		chai.expect(rdts_all_json.downvoted).to.have.property(`data`)
		chai.expect(rdts_all_json.downvoted).to.have.property(`pages`)
		chai.expect(rdts_all_json.downvoted.data).to.be.a(`array`)
		chai.expect(rdts_all_json.downvoted.pages).to.be.a(`number`)

		chai.expect(rdts_all_json.upvoted.data[0]).to.be.a(`object`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`id`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`fullname`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`title`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`href`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`author`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`subreddit`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`timestamp`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`url`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`commentsCount`)
		chai.expect(rdts_all_json.upvoted.data[0]).to.have.property(`score`)

		chai.expect(rdts_all_json.upvoted.data[0].id).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].fullname).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].title).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].href).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].author).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].subreddit).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].timestamp).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].url).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].commentsCount).to.be.a(`string`)
		chai.expect(rdts_all_json.upvoted.data[0].score).to.be.a(`string`)

	});

	it(`rdts all downvote feed was merged & saved properly`, () => {

		chai.expect(rdts_all_json).to.be.a(`object`)

		chai.expect(rdts_all_json).to.have.property(`user`)
		chai.expect(rdts_all_json).to.have.property(`upvoted`)
		chai.expect(rdts_all_json).to.have.property(`downvoted`)

		chai.expect(rdts_all_json.user).to.be.a(`string`)

		chai.expect(rdts_all_json.upvoted).to.be.a(`object`)
		chai.expect(rdts_all_json.upvoted).to.have.property(`data`)
		chai.expect(rdts_all_json.upvoted).to.have.property(`pages`)
		chai.expect(rdts_all_json.upvoted.data).to.be.a(`array`)
		chai.expect(rdts_all_json.upvoted.pages).to.be.a(`number`)

		chai.expect(rdts_all_json.downvoted).to.be.a(`object`)
		chai.expect(rdts_all_json.downvoted).to.have.property(`data`)
		chai.expect(rdts_all_json.downvoted).to.have.property(`pages`)
		chai.expect(rdts_all_json.downvoted.data).to.be.a(`array`)
		chai.expect(rdts_all_json.downvoted.pages).to.be.a(`number`)

		chai.expect(rdts_all_json.downvoted.data[0]).to.be.a(`object`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`id`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`fullname`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`title`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`href`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`author`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`subreddit`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`timestamp`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`url`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`commentsCount`)
		chai.expect(rdts_all_json.downvoted.data[0]).to.have.property(`score`)

		chai.expect(rdts_all_json.downvoted.data[0].id).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].fullname).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].title).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].href).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].author).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].subreddit).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].timestamp).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].url).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].commentsCount).to.be.a(`string`)
		chai.expect(rdts_all_json.downvoted.data[0].score).to.be.a(`string`)

	});

})


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

