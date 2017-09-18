#!/usr/bin/env bash
# https://www.codeeval.com/open_challenges/24/

file="$1"
OLDIFS=$IFS
IFS="\n"
c=0
while read line || [[ -n "$line" ]]
do
    c=$((c + line))
done < "$file"
echo $c
IFS=$OLDIFS
