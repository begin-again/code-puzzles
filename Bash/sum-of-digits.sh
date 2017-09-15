#!/usr/bin/env bash
# https://www.codeeval.com/open_challenges/21/

file="$1"
OLDIFS=$IFS
IFS="\n"
while read line || [[ -n "$line" ]]
do
    c=0
    for((x=0; x<${#line}; x++))
    do
        d=${line:x:1}
        c=$((c + d))
    done
    echo $c
done < "$file"
IFS=$OLDIFS
