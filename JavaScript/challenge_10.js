

var fs  = require("fs"), z = 0, t = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      z = line.split(' ').reverse();
      t = parseInt(z[0]);
      if ( t > 0 &&  z.length {
        console.log( return z[ z[0] ] );
      }
    }
});
