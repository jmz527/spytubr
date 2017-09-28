# tubr
Web scraper for YouTube daily feeds 

# Description

Offshoot of my Spydr application - scrapes youtube and serves the data within a lightweight feed management system

# Technologies Used:

NodeJS + Cheerio + HTML-Minifier + JS-Beautify + Request + Express + EJS + SQLite3 + jQuery + SpectreCSS + Mocha + Chai + StandardJS

# Installation Instructions:

First, clone this repo to a directory on your local machine and run `yarn`:

```sh
git clone git@github.com:jmz527/tubr.git
cd tubr/
yarn
```

After that's done, you're ready to go!

# Commands:

* `yarn run tubr`        :       this will fetch all, match, and merge
* `yarn run start`       :       this will start up the application
* `yarn run fetch`       :       this will fetch all
* `yarn run match`    	 :       this will cross-reference the new w/ the old
* `yarn run beautify`    :       this will minify then beautify the html files
* `yarn run purge`       :       this will delete all feeds & htmls
* `yarn run test`        :       this will run the mocha testing framework
* `yarn run lint`        :       this will run standard's linter

# Directory Tree:

```sh

```

# Thanks

based on the [node-web-scraper](https://github.com/scotch-io/node-web-scraper)

thanks [scotch.io](https://scotch.io/)!