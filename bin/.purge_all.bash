#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

rm -r "${PWD}"/feeds
rm -r "${PWD}"/htmls

rm -r "${PWD}"/routes.json

rm -r "${PWD}"/bin/.beautify_all.bash
rm -r "${PWD}"/bin/.fetch_yts.bash
rm -r "${PWD}"/bin/.match_all.bash