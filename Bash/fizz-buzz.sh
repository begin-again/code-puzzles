#!/usr/bin/env bash

# Puzzle source: https://www.codeeval.com/open_challenges/1/
# input: X Y N
# X is first divisor
# Y is second divisor
# N is number of iterations
# output F if N is multiple of X
# output B if N is multiple of Y
# output FB if both X and Y are multiples of N
# otherwise out put N
# X & Y are in range 1 to 20
# N is range 21 to 100

file="$1"
IFS_OLD=$IFS
IFS="\n"
while read line || [[ -n "$line" ]]
do
    IFS=" "
    read -a params <<<"$line"
    i=0
    out=""
    while [ $i -lt ${params[2]} ]
    do
        char=""
        tmp=$((i+1))
        x=$((tmp % params[0]))
        if [ "$x" -eq 0 ]; then char="F"; fi
        y=$((tmp % params[1]))
        if [ "$y" -eq 0 ]; then char="${char}B"; fi
        if [ -z "$char" ]; then char="$tmp"; fi
        if [ "$((i+1))" -lt ${params[2]} ]; then char="$char "; fi
        out="$out$char"
        let i=i+1
    done
    echo "$out"
done < "$file"
IFS="$IFS_OLD"
