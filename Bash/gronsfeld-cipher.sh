#!/usr/bin/env bash

# puzzle source: https://www.codeeval.com/open_challenges/181/
# https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher

alphabet=" !\"#\$%&'()*+,-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

file="$1"
OLDIFS=$IFS
while read -r line || [[ -n "$line" ]]
do
    
done < $file
IFS=$OLDIFS
