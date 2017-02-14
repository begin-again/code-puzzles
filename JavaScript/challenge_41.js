
function cool(s) {
  var a = s.split(';')[1].split(',');
  var m = {}
    , i = 0, j = a.length;

  while (i < j ) {
   if ( m[ a[i] ] ) {
      return a[i];
    } else {
      m[ a[i] ] = 1;
    }
    i += 1
  }
  return null;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    console.log( cool(line) );
  }
});
