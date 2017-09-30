const YTS = require(`./yts_module`)

switch (process.argv[2]) {
  case `add_route`:
    YTS.methods.add_route(process.argv[3], process.argv[4])
    break
  case `fetch`:
    YTS.methods.fetch_and_match(process.argv[3], process.argv[4])
    break
  case `fetch_and_save`:
    YTS.methods.fetch_and_save(process.argv[3], process.argv[4])
    break
  case `fetch_and_match`:
    YTS.methods.fetch_and_match(process.argv[3], process.argv[4])
    break
  case `match`:
    YTS.methods.match_files(process.argv[3])
    break
  case `match_files`:
    YTS.methods.match_files(process.argv[3])
    break
  case `mark_active`:
    YTS.methods.mark_active(process.argv[3], process.argv[4])
    break
  case `mark_watched`:
    YTS.methods.mark_watched(process.argv[3], process.argv[4])
    break
  default:
    console.log(`\x1b[31m%s\x1b[0m`, `${process.argv[2]} is not a proper command`)
    break
}
