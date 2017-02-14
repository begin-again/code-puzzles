/*
  Challenege 62; MOD without using MOD

*/

function lameMOD(a,b) {
  // unlike Ruby; JS '/' operator is floating point div
  var x = ( a - (b * Math.floor(a / b) ) );
  return x;
}
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      var a = line.split(',').map(
        function(e) {
          return parseInt(e);
        }
      );
      console.log(lameMOD(a[0],a[1]));
    }
});
