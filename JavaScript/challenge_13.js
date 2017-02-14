
function removeChars(a) {
  var s = a.split(",")
    , chars = s[1]
    , rx, out = ""
    , i = 1, j = chars.length
    ;
  while( i < j) {
    rx = new RegExp( chars[i] , 'g');
    out = s[0].replace(rx, "");
    s[0] = out;
    i += 1;
  }
  return out;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines

      console.log( removeChars(line) ) ;
    }
});
