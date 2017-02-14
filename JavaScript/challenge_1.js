

var fs  = require("fs"), z = 0, t = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      z = parseInt( line.slice(-1) );
      t = a.length - 3 - ((z-1) * 2);
      if ( t >= 0 ) {
        console.log( line[t] );
      } else {
        continue;
      }
    }
});
