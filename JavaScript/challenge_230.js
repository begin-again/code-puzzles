/*
  challenge 230

  People around the world watch football matches and root for different football teams.
  Some people are fans of Real Madrid, some like Barcelona, some pull for Atletico Madrid,
  while others do not miss a single match with FC Bayern Munich.
  The teams would like to know people in which countries cheer for them. So, let’s help them!

  INPUT SAMPLE:

  The first argument is a path to a file.
  Each row includes a test case with lists of countries.
  Lists are separated by pipelines '|'.
  Each list includes football teams that people in these countries root for.

  For example:

  1 2 3 4 | 3 1 | 4 1
  19 11 | 19 21 23 | 31 39 29
  10 20 | 43 23 | 27 | 25 | 11 1 12 43 | 33 18 3 43 41 | 31 3 45 4 36 | 25 29 | 1 19 39 | 39 12 16 28 30 37 | 32 | 11 10 7
  c1 : T1 T2 T3 T4  ; c2 = T3 T1 ; c3 = T4 T1

  OUTPUT SAMPLE:

  T1: C1, C2, C3
  For each football team, print a list of countries where people root for them.
  Separate each team by a semicolon ';' and a space. All output should be sorted.

  For example:
  1:1,2,3; 2:1; 3:1,2; 4:1,3;
  11:1; 19:1,2; 21:2; 23:2; 29:3; 31:3; 39:3;
  1:5,9; 3:6,7; 4:7; 7:12; 10:1,12; 11:5,12; 12:5,10; 16:10; 18:6; 19:9; 20:1; 23:2; 25:4,8; 27:3; 28:10; 29:8; 30:10; 31:7; 32:11; 33:6; 36:7; 37:10; 39:9,10; 41:6; 43:2,5,6; 45:7;

  team: c1, c2, c3
  each list is a country
*/

// Creates an object of teams and countries
// expects that arr is an array of numbers and '|'
// ['1','2']
function createTeamMap(arr) {
  var country = 1
    ,m = {}
    ,j = arr.length
    ,i = 0
    ,team
    ;
  while( i < j ) {
    team = arr[i];
    if (team === "|") {
      country += 1;
    } else {
      if ( team in m ) {
        m[team].push(country);
      } else {
        m[team] = [country];
      }
    }
    i += 1;
  }
  return m;
}

// Transposes the map into teams and countries
// T1: C1, C2, C3;
// expects a map like {'1': [1,2,3]}
function createOutput(map) {
  var outString = ""
    ,k = ""
    ,teams = []
    ,i = 0
    ,j = 0
    ;
  for ( k in map) {
    teams.push(k);
  }
  teams.sort(function(a,b){
    return parseInt(a) - parseInt(b);
  });
  j = teams.length;
  while( i < j ) {
    outString += teams[i] + ":";
    outString += map[ teams[i] ].join(",");
    outString += "; ";
    i += 1;
  }
  return outString.trim();
}

function driver(str) {
  var m = createTeamMap( str.split(" ") )
    ,o = createOutput( m )
    ;
  return o;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    console.log( driver(line) );
  }
});
