/*
  Challenge 100 ; Even Numbers
*/

function isEven(input) {
    'use strict';
    if (input % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        var d = parseInt(line);
        console.log(isEven(d));
    }
});
