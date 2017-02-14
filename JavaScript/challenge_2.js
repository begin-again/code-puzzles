/*
  Challenge 2; Longest Lines
  The file contains multiple lines. The first line indicates the number of lines you should output, the other lines are of different length and are presented randomly.
*/

function topLongest(arStrings) {
  "use strict";
  var numStrings = parseInt(arStrings.shift(), 10 ), topStrings = [];
  var orderedStrings = arStrings.sort(
    function(a,b) {
      return (b.length - a.length);
    }
  );
  for(var i = 0; i < numStrings; i += 1) {
    topStrings.push(orderedStrings[i]);
  }
  return topStrings;
}

var fs  = require("fs");
var lines = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  "use strict";
  if (line !== "") { // ignore empty lines
    lines.push(line);
  }
});
var x = topLongest(lines);
for(var i = 0, j = x.length; i < j; i += 1) {
  console.log(x[i]);
}

