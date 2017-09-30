#!/usr/bin/env bash

# DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir feeds htmls

cp "${PWD}"/test/feeds/flat_json_tester.json "${PWD}"/feeds/.
cp "${PWD}"/test/feeds/json_tester.json "${PWD}"/feeds/.
cp "${PWD}"/test/feeds/routes.json "${PWD}"

cp "${PWD}"/test/htmls/html_min.html "${PWD}"/htmls/.
cp "${PWD}"/test/htmls/test.html "${PWD}"/htmls/.
cp "${PWD}"/test/htmls/test_beauty.html "${PWD}"/htmls/.
cp "${PWD}"/test/htmls/test_original.html "${PWD}"/htmls/.

cp "${PWD}"/test/bin/.beautify_all.bash "${PWD}"/bin/.beautify_all.bash
cp "${PWD}"/test/bin/.fetch_yts.bash "${PWD}"/bin/.fetch_yts.bash
cp "${PWD}"/test/bin/.match_all.bash "${PWD}"/bin/.match_all.bash