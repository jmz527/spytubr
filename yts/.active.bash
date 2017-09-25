#!/usr/bin/env bash

PWD="$( pwd )"

node "${PWD}"/yts/yts_interface.js mark_active "$1" "$2"