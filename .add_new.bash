#!/usr/bin/env bash

PWD="$( pwd )"

echo 'node "${PWD}"/util/file_util_interface.js minify "${PWD}"/htmls/'"$2"'.html' >> "${PWD}"/bin/.beautify_all.bash
echo 'node "${PWD}"/util/file_util_interface.js beautify "${PWD}"/htmls/'"$2"'.html' >> "${PWD}"/bin/.beautify_all.bash

echo 'node "${PWD}"/yts/yts_interface.js fetch' "$1" "$2" >> "${PWD}"/bin/.fetch_yts.bash

echo 'node "${PWD}"/yts/yts_interface.js match' "$2" >> "${PWD}"/bin/.match_all.bash

node "${PWD}"/add_new.js "$1" "$2"
