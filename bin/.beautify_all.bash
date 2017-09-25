#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# minify & beautify yts

node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_alt_shift_x.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_cgp_grey.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_community.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_colbert.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_computerphile.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_conan.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_daily_show.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_full_frontal.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_kurzgesagt.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_movieclip_trailers.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_numberphile.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_nycxclothes.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_oliver.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_computer_history.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_facebook_dev.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_fun_fun_function.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_google_dev.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_google_tech_talks.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/yts_netflix_ui.html

node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_alt_shift_x.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_cgp_grey.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_community.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_colbert.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_computerphile.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_conan.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_daily_show.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_full_frontal.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_kurzgesagt.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_movieclip_trailers.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_numberphile.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_nycxclothes.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_oliver.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_computer_history.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_facebook_dev.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_fun_fun_function.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_google_dev.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_google_tech_talks.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/yts_netflix_ui.html

