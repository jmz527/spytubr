#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

"${DIR}"/.fetch_cls.bash
"${DIR}"/.fetch_igrms.bash
"${DIR}"/.fetch_rdts.bash
"${DIR}"/.fetch_yts.bash
