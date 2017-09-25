#!/usr/bin/env bash

PWD="$( pwd )"

node "${PWD}"/cls/cls_interface.js fetch brk apts
node "${PWD}"/cls/cls_interface.js fetch mnh apts

node "${PWD}"/cls/cls_interface.js fetch sof 'jobs'