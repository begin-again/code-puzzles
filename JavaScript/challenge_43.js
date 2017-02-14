
function isJolly(s) {
  var a = s.split(' ').slice(1).map(Number)
    , i = 0, j = 0
    , result = true
    , diffs = []
    ;

  // get diffs
  for(j = a.length-1; i < j; i+= 1) {
    diffs.push(Math.abs(a[i] - a[i+1]));
  }
  // sort ascending
  diffs.sort(function(a,b){return parseInt(a) - parseInt(b);});

  // go through sequence
  for(i = 0, j = diffs.length; i < j; i += 1 ) {
    if ((i+1) != diffs[i] ) {
      result = false;
      break;
    }
  }
  return result;
}

var fs  = require("fs"), result;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      result = isJolly(line);
      console.log( result ? 'Jolly' : 'Not jolly' );
    }
});
