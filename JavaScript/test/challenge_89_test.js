/*
  Challenge 89; PASS TRIANGLE
  By starting at the top of the triangle and moving to adjacent
  numbers on the row below, the maximum total from top to bottom is 27.

  1. determine adjacent values
    a. need position of prior value (pp)
    b. adjacent values are (pp-1) and (pp + 1), either of which could be null
  2. determine max
  3. add max to running sum

  select max possible adjacent value
  so for second line; options as max(9,6)
          5
        9   6
      4   6   8
    0   7   1   5
  a   b   c   d   e

    5 + 9 + 6 + 7 = 27


*/

var expect = require('chai').expect;

