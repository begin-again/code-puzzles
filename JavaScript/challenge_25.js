/*
  challenge 25
  sample input
    None
  sample output
    print the odd numbers in range 1 through 99
    one per line
*/

var fs  = require("fs");
var running_sum = 0;
for(i=1;i<100;i++) {
  //no need for modulo since starting number known
  console.log(i);
  i++;
}
