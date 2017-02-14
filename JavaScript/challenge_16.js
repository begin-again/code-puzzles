

var fs  = require("fs"), z = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    z = parseInt(line).toString(2).match(/1/g) || [];
    console.log( z.length );
  }
});
