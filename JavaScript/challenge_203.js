/*
  Challenge 203; STRINGS AND ARROWS

*/

var leftArrow = '<--<<';
var rightArrow = '>>-->';
function numArrows(s) {
  var matches = 0;
  for(var i = 0; i < s.length; i++) {
    var aSlice = s.slice(i,i+5);
    if (aSlice.length < 5 ) {
      break;
    }
    if ( aSlice === leftArrow || aSlice === rightArrow ) {
      matches++;
    }
  }
  return matches;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(numArrows(line));
    }
});
