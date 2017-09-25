#!/usr/bin/env bash

PWD="$( pwd )"

node "${PWD}"/yts/yts_interface.js mark_watched "$1" "$2"