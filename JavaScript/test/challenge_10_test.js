/*
  Challenge 10: MTH TO LAST ELEMENT

  The first argument is a path to a file. The file contains the series of space delimited characters followed by an integer. The integer represents an index in the list (1-based), one per line.


*/


var expect = require('chai').expect
  , d1 = "a b c d 4", e1 = "a"
  //      123456789
  //      012345678
  , d2 = "e f g h 2", e2 = "g"
  ;

// "a b c d X"
// 1 = len-3 = 6 = a[6]; len - 3 - (1-1) * 2
// 2 = len-3 - 2
// 3 = len-3 -2 - 2

function toLast(line) {
  z = line.split(' ').reverse();
  t = parseInt(z[0]);
  if ( t > 0 &&  t < z.length) {
    return z[ t ] ;
  }
}

describe('toLast()', function(){
  it('should be g', function(){
    expect( toLast(d2) ).to.be.equal(e2)
  });
  it('should be undefined', function(){
    expect( toLast("a b c d 5") ).to.be.undefined
  });
  it('should be a', function(){
    expect( toLast("a b c d 4") ).to.be.equal("a");
  });
  it('should be b', function(){
    expect( toLast("a b c d 3") ).to.be.equal("b");
  });
  it('should be c', function(){
    expect( toLast("a b c d 2") ).to.be.equal("c");
  });
  it('should be d', function(){
    expect( toLast("a b c d 1") ).to.be.equal("d");
  });
  it('should be ', function(){
    expect( toLast("a b c d 0") ).to.be.undefined;
  });
});
