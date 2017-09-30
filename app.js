const express = require(`express`)
const app = express()
const path = require(`path`)
const logger = require(`morgan`)
const bodyParser = require(`body-parser`)
const routes = require(`./routes`)

/* This will allow db to run your api smoothly but it won't break other execution environment */
const host = process.env.HOST || `localhost`
const port = process.env.PORT || process.argv[2] || 1337

app.set(`views`, path.join(__dirname, `views`))
app.set(`view engine`, `ejs`) // view engine setup

app.use(logger(`dev`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(`/`, routes) // Setting routes

app.use(express.static(path.join(__dirname, `views/assets`)))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error(`Not Found`)
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get(`env`) === `development`) {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render(`error`, {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render(`error`, {
    message: err.message,
    error: {}
  })
})

// start your engines
app.listen(port, host, () => {
  console.log(`App listening on port ${host}:${port}`)
})
