
function isTrailing(a,b) {
  var l = b.length;
  return a.slice(0 - l) === b ? 1 : 0;
}

var fs  = require("fs")
  , data;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      data = line.split(",");
      console.log( isTrailing(data[0], data[1]) ) ;
    }
});
