
function justLetters(s) {
  var temp;
  var temp = s.toUpperCase().split("").filter( function(e,i,a) {
      return e.match(/^[A-Z]$/i);
    });
  return temp;
}

function createMap(arr) {
  var m = {}
    ,j = arr.length
    ,i = 0
    ,key
    ;

  while( i < j ) {
    key = arr[i];
    if ( key in m ) {
      m[key] += 1;
    } else {
      m[key] = 1;
    }
    i += 1;
  }
  return m;
}

function Score(s) {
  var map = createMap( justLetters(s) )
    , vals = []
    , k
    , i = 0
    , j = 0
    , beauty = 26
    , sum = 0
    ;

  // make an array of values
  Object.keys(map).forEach(function(key) {
    vals.push( map[key] );
  });

  // sort values in numerical reverse order
  vals.sort( function(a,b) {
    return b - a;
  });

  j = vals.length;
  while( i < j) {
    sum += beauty * vals[i];
    beauty -= 1
    i += 1
  }

  return sum;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(Score(line));
    }
});
