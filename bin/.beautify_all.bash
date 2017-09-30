#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# NEW MINIFY & BEAUTIFY CALLS GENERATED BELOW #
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/colbert.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/colbert.html
node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/daily_show.html
node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/daily_show.html
