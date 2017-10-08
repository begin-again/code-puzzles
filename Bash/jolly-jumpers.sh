#!/usr/bin/env bash
# source: https://www.codeeval.com/open_challenges/43/

file="$1"
FS_OLD=$IFS
IFS="\n"
while read line || [[ -n "$line" ]]
do
    IFS=" \n"
    read -a ar <<< "$line"
    # step through array, if x, x-1 abs is > than prior, its not jolly
    m=ar[0]
    if [[ m -gt 0 ]]; then
        for((i=1; i < m; i++))
        do
            if [[ $i -gt 0 ]]; then

            fi
        done
    else
        echo "Jolly"
    fi
done < "$file"
IFS=$IFS_OLD
