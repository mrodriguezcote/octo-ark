#!/usr/bin/env bash

[ "$1" != "delayed-pickles" ] && exec $@

echo "running mono pickles -- outputs to pickles:src/web"
echo "waiting on results..."

# sleeping here to ensure cucumber gets a chance to remove results file
sleep ${INITIAL_DELAY:-5}

while [ ! -e /results/.complete ]; do
  sleep 1
done

echo "RESULTS FOUND -- RUNNING MONO!"

mono pickles/pickles.exe -f features -o web -lr /results/results.json -trfmt cucumberjson -df DHTML
