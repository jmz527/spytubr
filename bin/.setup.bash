#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

mkdir feeds htmls

cp "./test/feeds/flat_json_tester.json" ./feeds/.
cp "./test/feeds/json_tester.json" ./feeds/.
cp "./test/feeds/routes.json" .

cp "./test/htmls/html_min.html" ./htmls/.
cp "./test/htmls/test.html" ./htmls/.
cp "./test/htmls/test_beauty.html" ./htmls/.
cp "./test/htmls/test_original.html" ./htmls/.

cp "${PWD}"/bin/.beautify_all.bash /bin/.
cp "${PWD}"/bin/.fetch_yts.bash /bin/.
cp "${PWD}"/bin/.match_all.bash /bin/.