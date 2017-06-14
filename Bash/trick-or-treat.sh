#!/usr/bin/env bash

# source: https://www.codeeval.com/open_challenges/220/

file="$1"
OLDIFS=$IFS
while read line || [[ -n "$line" ]]
do
    IFS=":, \n"
    read -a ar <<< "$line"
    kids=$(( ar[1] + ar[3] + ar[5]))
    pcs_per_house=$(( ar[1] * 3 + ar[3] * 4 + ar[5] * 5 ))
    pcs_total=$(( pcs_per_house * ar[7] ))
    mean_pcs=$((pcs_total / kids))
    # echo "kids: $kids, pcs per home: $pcs_per_house, pcs_total: $pcs_total, mean: $mean_pcs"
    echo $mean_pcs
    IFS="\n"
done < $file
IFS=$OLDIFS
