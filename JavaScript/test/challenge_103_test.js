
var expect = require('chai').expect
  ,d1 = '3 3 9 1 6 5 8 1 5 3', e1 = 5
  ,d2 = '9 2 9 9 1 8 8 8 2 1 1', e2 = 0
  ;

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

describe('Challenge', function() {
  describe('testUnique()', function() {
    it('should be true', function() {
      var a = [1,1,1];
      expect( testUnique(a[0], 0, a) ).to.be.true;
    });
    it('should be false', function() {
      var a = [1,1,1];
      expect( testUnique(a[1], 1, a) ).to.be.false;
    });
  });
  describe('uniqueElements()', function() {
    it('should be an array', function() {
      var a = [];
      expect( uniqueElements(a) ).to.be.a('array');
    });
    it('should be empty', function() {
      var a = [];
      expect( uniqueElements(a) ).to.be.empty;
    });
    it('should be unique', function() {
      var a = [1,1];
      expect( uniqueElements(a) ).to.eql([1]);
    });
  });
  describe('gameWinner()', function(){
    it('should be position 5 because 6 is unique', function() {
      var a = [3,3,9,1,6,5,8,1,5,3];
      expect( gameWinner(a) ).to.equal(5);
    });
    it('should be 0 because no unique numbers', function() {
      var a = [9,2,9,9,1,8,8,8,2,1];
      expect( gameWinner(a) ).to.equal(0);
    });
  })
});
