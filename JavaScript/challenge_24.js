/*
  challenge 24; SUM OF INTEGERS FROM FILE
  sample input
    positive integer, one per line
    5
    12
  sample output
    17
*/

var fs  = require("fs");
var running_sum = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      running_sum += parseInt(line);
    }
});
console.log(running_sum);
