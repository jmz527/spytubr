const UTIL = require(`./file_util`)

switch (process.argv[2]) {
  case `beautify`:
    UTIL.methods.beautifyHTML(process.argv[3])
    break
  case `minify`:
    UTIL.methods.minifyHTML(process.argv[3])
    break
  default:
    console.log(`\x1b[31m%s\x1b[0m`, `${process.argv[2]} is not a proper command`)
    break
}
