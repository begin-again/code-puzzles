/*
  Challenge 21; Sum of Digits

  Given a positive integer, find the sum of its constituent digits.

*/

var expect = require('chai').expect
  , d1 = 23
  , d2 = 496
  , e1 = 5
  , e2 = 19
  ;

function sumDigits(n) {
  var s = n.toString()
    , i = 0
    , j = 0
    , sum = 0
    ;
  j = s.length;
  while (i < j ) {
    sum += parseInt(s[i]);
    i += 1;
  }
  return sum;
}

describe('sumDigits()', function(){
  it('should be 5', function(){
    expect( sumDigits(23) ).to.be.equal(5);
  });
  it('should be 19', function(){
    expect( sumDigits(496) ).to.be.equal(19);
  });
});
