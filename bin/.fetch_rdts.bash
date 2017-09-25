#!/usr/bin/env bash

PWD="$( pwd )"

# upvoted
node "${PWD}"/rdts/rdts_interface.js fetch james527 upvoted
node "${PWD}"/rdts/rdts_interface.js fetch moootPoint upvoted
node "${PWD}"/rdts/rdts_interface.js fetch jgametime upvoted

# node "${PWD}"/rdts/rdts_interface.js fetch_deep james527 upvoted
# node "${PWD}"/rdts/rdts_interface.js fetch_deep moootPoint upvoted

# downvoted
node "${PWD}"/rdts/rdts_interface.js fetch james527 downvoted
node "${PWD}"/rdts/rdts_interface.js fetch moootPoint downvoted
node "${PWD}"/rdts/rdts_interface.js fetch jgametime downvoted

# node "${PWD}"/rdts/rdts_interface.js fetch_deep james527 downvoted
# node "${PWD}"/rdts/rdts_interface.js fetch_deep moootPoint downvoted
