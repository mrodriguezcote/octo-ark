#!/usr/bin/env bash

# First argument is the target branch
# Second argument is the branch being merged

if [ $# -eq 0 ] || [ $# -eq 1 ]; then
	echo "--------------------------------------------------"
	echo "provide target branch as the first argument"
	echo "provide branch being merged as the second argument"
	echo "--------------------------------------------------"
	exit
fi

mkdir -p /www/tmp/YETI

git clone git@github.com:BlueAcornInc/YETI.git /www/tmp/YETI

cd /www/tmp/YETI

git fetch && git checkout $1

git checkout -b unstable/test_branch && git merge --no-ff $2

git push -f --set-upstream origin unstable/test_branch

git checkout develop && git branch -D unstable/test_branch
