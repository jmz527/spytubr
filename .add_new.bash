#!/usr/bin/env bash

PWD="$( pwd )"

node "${PWD}"/yts_interface.js add_route "$1" "$2"
