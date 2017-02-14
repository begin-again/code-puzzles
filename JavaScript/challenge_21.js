
function sumDigits(n) {
  var s = n.toString()
    , i = 0
    , j = 0
    , sum = 0
    ;
  j = s.length;
  while (i < j ) {
    sum += parseInt(s[i]);
    i += 1;
  }
  return sum;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log( sumDigits(line) );
    }
});
