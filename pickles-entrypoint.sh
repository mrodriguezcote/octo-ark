#!/usr/bin/env bash

[ "$1" != "delayed-pickles" ] && exec $@

echo "running pickles -- outputs to src/pickles/web"
echo "waiting on results..."

# sleeping here to ensure cucumber gets a chance to remove results file
sleep ${INITIAL_DELAY:-5}

while [ ! -e /src/runner/.complete ]; do
  sleep 1
done

echo "RESULTS FOUND -- RUNNING MONO!"

mono lib/pickles.exe -f /src/runner/features -o /src/pickles/web -lr /src/runner/results.json -trfmt cucumberjson -df DHTML
