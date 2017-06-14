#!/usr/bin/env bash

# source: https://www.codeeval.com/open_challenges/163/
# 
# output of 0123456789
# -**----*--***--***---*---****--**--****--**---**--
# *--*--**-----*----*-*--*-*----*-------*-*--*-*--*-
# *--*---*---**---**--****-***--***----*---**---***-
# *--*---*--*-------*----*----*-*--*--*---*--*----*-
# -**---***-****-***-----*-***---**---*----**---**--
# --------------------------------------------------

# each number is 6 char wide (right-most is always a minus ) and 5 tall
# end each line with minus line

file="$1"

digit_0=("-**--" "*--*-" "*--*-" "*--*-" "-**--")
digit_1=("--*--" "-**--" "--*--" "--*--" "-***-")
digit_2=("***--" "---*-" "-**--" "*----" "****-")
digit_3=("***--" "---*-" "-**--" "---*-" "***--")
digit_4=("-*---" "*--*-" "****-" "---*-" "---*-")
digit_5=("****-" "*----" "***--" "---*-" "***--")
digit_6=("-**--" "*----" "***--" "*--*-" "-**--")
digit_7=("****-" "---*-" "--*--" "-*---" "-*---")
digit_8=("-**--" "*--*-" "-**--" "*--*-" "-**--")
digit_9=("-**--" "*--*-" "-***-" "---*-" "-**--")

while read line || [[ -n "$line" ]]
do
    numbers=${line//[^0-9]/}
    # each horizontal line
    for((l=0; l<5; l++))
    do
        # each number
        hline=""
        for((i=0; i<${#numbers}; i++))
        do
            case ${numbers:$i:1} in
                0|'0')
                hline="$hline${digit_0[$l]}"
                ;;
                1|'1')
                hline="$hline${digit_1[$l]}"
                ;;
                2|'2')
                hline="$hline${digit_2[$l]}"
                ;;
                3|'3')
                hline="$hline${digit_3[$l]}"
                ;;
                4|'4')
                hline="$hline${digit_4[$l]}"
                ;;
                5|'5')
                hline="$hline${digit_5[$l]}"
                ;;
                6|'6')
                hline="$hline${digit_6[$l]}"
                ;;
                7|'7')
                hline="$hline${digit_7[$l]}"
                ;;
                8|'8')
                hline="$hline${digit_8[$l]}"
                ;;
                9|'9')
                hline="$hline${digit_9[$l]}"
                ;;
                *)
                ;;
            esac
        done
        echo "$hline"
    done
    hline=""
    for((x=0; x<${#numbers}; x++))
    do
        hline="$hline-----"
    done
    echo "$hline"
done < $file
