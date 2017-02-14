
/*
  Challenge 32; TRAILING STRING
  There are two strings: A and B.
  Print 1 if string B occurs at the end of string A.
  Otherwise, print 0.

*/
var expect = require('chai').expect;


function isTrailing(a,b) {
  var l = b.length;
  return a.slice(0 - l) === b ? 1 : 0;
}

describe('isTrailing()', function(){
  it('should be 1', function(){
    expect( isTrailing("Hello World", "World") ).to.be.equal(1);
  });
  it('should be 1', function(){
    expect( isTrailing("Hello CodeEval", "CodeEval") ).to.be.equal(1);
  });
  it('should be 0', function(){
    expect( isTrailing("San Francisco", "San Jose") ).to.be.equal(0);
  });
  it('should be 1', function(){
    expect( isTrailing("World", "World") ).to.be.equal(1);
  });
  it('should be 0', function(){
    expect( isTrailing("Wor", "World") ).to.be.equal(0);
  });
});
