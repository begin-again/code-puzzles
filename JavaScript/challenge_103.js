/*
  Challenge 103; LOWEST UNIQUE NUMBER

  There is a game where each player picks a number from 1 to 9, writes it on
  a paper and gives to a guide. A player wins if his number is the lowest unique.

  Print a winner's position or 0 if there is no winner

  sounds perfect for indexOf method

  3 3 9 1 6 5 8 1 5 3 == > 5
  9 2 9 9 1 8 8 8 2 1 1 ==> 0

*/

// returns an array of unique elements
function uniqueElements(arInput) {
  return arInput.filter(testUnique);
}

// returns false is element already in array
// arguments passed in by filter method
function testUnique(e, i, a) {
  // v is the element iterated over
  // i is the index of the element
  // a is the array the filter was called on
  // indexOf returns the first index found for a value
  // thus if the indexes don't match is must be a duplicate
  return a.indexOf(e) === i;
}

// Determines the winner if any
// arPlayers => array of integers
// returns and integer (0 => none; >0 position of winner)
function gameWinner(arPlayers) {
  var u = uniqueElements(arPlayers).sort();
  var winner = 0, i = 0;
  for(; i < u.length; i++) {
    if ( arPlayers.indexOf(u[i]) === arPlayers.lastIndexOf(u[i]) ) {
      winner = arPlayers.indexOf(u[i]);
      break;
    }
  }
  if ( i === (u.length) ) {
    return 0;
  } else {
    return (winner + 1 );
  }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    var a = line.split(' ');
    for(var i =0; i < a.length; i++) {
      a[i] = parseInt(a[i]);
    }
    console.log(gameWinner(a));
  }
});
