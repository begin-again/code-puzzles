// challenge description
// sample input -
// sample output -

function swapCase(s) {
  var i = 0
    , j = s.length
    , out = ""
    , tmp = ""
    ;
  while(i < j) {
    if (s[i] === s[i].toUpperCase() ) {
      out += s[i].toLowerCase();
    } else {
      out += s[i].toUpperCase();
    }
    i += 1;
  }
  return out;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log( swapCase(line) );
    }
});
