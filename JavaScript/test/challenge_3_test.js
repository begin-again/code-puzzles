/*
  Challenge 3; Prime Pallindrome

  Write a program which determines the largest prime palindrome less than 1000.

  Answer is: 929

*/

var expect = require('chai').expect
  , e1 = 929
  ;


function isPrime(n) {
  var i = 2
    , sqrt_n = Math.floor(Math.sqrt(n))
    ;
  while (i <= sqrt_n) {
    if (n % i === 0 ) {
      return false;
    }
    i += 1;
  }
  return true;
}

function isPallindrome(n) {
  var digits = ""
    , digits_len = 0
    , half_digits = 0
    , i = 0
    ;
  if (typeof(n) !== 'number') {
    return false;
  }
  digits = n.toString().split("");
  digits_len = digits.length;
  if ( digits_len === 0 ) {
    return false;
  } else if ( digits_len === 1) {
    return true;
  } else if (digits_len === 2 ) {
    return digits[0] === digits[1];
  } else {
    half_digits = Math.floor(digits_len/2);
    do {
      if (digits[i] !== digits[ digits_len - i - 1 ]) {
        return false;
      }
      i += 1;
    } while( i < half_digits ) ;
  }
  return true;
}

function driver(n) {
  var last_pp = 0
    , i = 2
    ;
  do {
    if (isPrime(i) && isPallindrome(i) ) {
      last_pp = i;
    }
    i += 1;
  } while (i < n);
  return last_pp;
}

describe('driver()', function(){
  it('should be 929', function(){
    expect( driver(1000)).to.be.equal(929);
  });
});

describe('isPallindrome()', function(){
  it('should be false', function(){
    expect( isPallindrome() ).to.not.be.ok;
  });
  it('should be true; 0 is a pallindrome', function(){
    expect( isPallindrome(0) ).to.be.ok;
  });
  it('should be true; 11 is a pallindrome', function(){
    expect( isPallindrome(11) ).to.be.ok;
  });
  it('should be true, 121', function(){
    expect( isPallindrome(121) ).to.be.ok;
  });
  it('should be false. 123', function(){
    expect( isPallindrome(123) ).to.not.be.ok;
  });
  it('should be false. 1231', function(){
    expect( isPallindrome(1231) ).to.not.be.ok;
  });
  it('should be true. 1221', function(){
    expect( isPallindrome(1221) ).to.be.ok;
  });
  it('should be true. -1221', function(){
    expect( isPallindrome(-1221) ).to.be.ok;
  });
});

describe('isPrime()', function() {
  it('should be true', function() {
    expect( isPrime(11) ).to.be.ok;
  });
  it('should be false', function() {
    expect( isPrime(12) ).to.not.be.ok;
  });
  it('should be false', function() {
    expect( isPrime(4) ).to.not.be.ok;
  });
});
