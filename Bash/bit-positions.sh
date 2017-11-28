#!/usr/bin/env bash

# puzzle source: https://www.codeeval.com/open_challenges/19/

# Given 3 numbers, determine if bit positions denoted by the 2nd and 3rd numbers
# are the same in binary representation of the first number.
# 86,2,3 => 01010110,2,3 => "true"
# 125,1,2 => 01111101,1,2 => "false"

file="$1"
OLDIFS=$IFS
IFS="\n"
while read line || [[ -n "$line" ]]
do
    IFS=",\n"
    # This assumes that the line does not have CR at end (windows-style)
    read -a data <<< "$line"
    binary=""
    decimal=${data[0]}
    len=0
    while [ $decimal -ne 0 ]
    do
        len=$((len+1))
        binary=$(($decimal % 2))$binary
        decimal=$(($decimal / 2))
    done
    echo "$len"
    p1=${data[1]}
    p2=${data[2]}
    p1x=$((len+1-p1))
    p2x=$((len+1-p2))
    echo "$p1 is $p1x, $p2 is $p2x"
    pos1=${binary:p1x:1}
    pos2=${binary:p2x:1}
    echo "$binary, bit at $p1 is $pos1, bit at $p2 is $pos2"
    if [ "$pos1" = "1" ] && [ "$pos2" = "1" ];
    then
        echo "true"
    else
        echo "false"
    fi
    IFS="\n"
done < "$file"
IFS=$OLDIFS
