#!/usr/bin/env bash

# puzzle source: https://www.codeeval.com/open_challenges/20/
# Given a string write a program to convert it into lowercase.

file="$1"
IFS_OLD=$IFS
IFS="\n"
while read -r line || [[ -n "$line" ]]
do
    declare -l lcase
    for((i=0;i<${#line};i++))
    do
        lcase="${line:$i:1}"
        printf '%s' "$lcase"
    done
    printf "\n"
done < "$file"
IFS=$OLDIFS
