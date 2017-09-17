#!/usr/bin/env bash
#  Source: https://www.codeeval.com/open_challenges/62/

file="$1"
FS_OLD=$IFS
IFS="\n"
while read line || [[ -n "$line" ]]
do
    IFS=",\n"
    read -a ar <<< "$line"
    echo $((ar[0] % ar[1]))
    IFS="\n"
done < "$file"
IFS=$IFS_OLD
