#!/usr/bin/env bash
# https://www.codeeval.com/open_challenges/25/
for((i=1; i<100; i++))
do
    if [ $((i % 2)) -gt 0 ];
    then
        echo "$i"
    fi
done
