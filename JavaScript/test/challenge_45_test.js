/*
  Challenge 45; Reverse and Add

  The problem is as follows: choose a number, reverse its digits
  and add it to the original.
  If the sum is not a palindrome
  (which means, it is not the same number from left to
  right and right to left), repeat this procedure.

  For example:

  195 (initial number) + 591 (reverse of initial number) = 786
  786 + 687 = 1473
  1473 + 3741 = 5214
  5214 + 4125 = 9339 (palindrome)

*/

var expect = require('chai').expect;

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
  if (digits[0] === '-') {
    digits.shift();
  }
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

function reverseNumber(n) {
  var rn = n.toString(10).split('').reverse();
  if (rn[rn.length-1] === '-') {
    rn.pop();
    rn.unshift('-');
  }
  return parseInt(rn.join(''));
}

function driver(n) {
  var rs = n  // running sum
    , i = 0   // iteration counter
    , p_flag = false  // pallidrome found flag
    ;
  do {
    if (i >= 10000) {break;}
    rs += reverseNumber(rs);
    i += 1;
    p_flag = isPallindrome(rs);
    //console.log('driver: p_flag => ' + p_flag + " | rs: " + rs);
  } while ( p_flag !== true);
  if (p_flag !== true ) {
    return [i];
  } else {
    return [i,rs];
  }
}

describe.only('driver()', function(){
  it('should be an array', function(){
    expect( driver(195) ).to.be.an('array');
  });
  it('should be an array of size 2', function(){
    expect( driver(195).length ).to.be.equal(2);
  });
  it('should be [4,9339]', function(){
    expect( driver(195) ).to.be.eql([4,9339]);
  });
  it('should be an array of size 1', function(){
    expect( driver(196).length ).to.be.equal(1);
  });
  it('should be an array of size 1', function(){
    expect( driver(196) ).to.be.eql([10000]);
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

describe('reverseNumber()', function() {
  it('should be 0', function(){
    expect( reverseNumber(0) ).to.be.equal(0);
  });
  it('should be 1', function(){
    expect( reverseNumber(1) ).to.be.equal(1);
  });
  it('should be 1', function(){
    expect( reverseNumber(10) ).to.be.equal(1);
  });
  it('should be 1', function(){
    expect( reverseNumber(100) ).to.be.equal(1);
  });
  it('should be 101', function(){
    expect( reverseNumber(101) ).to.be.equal(101);
  });
  it('should be 951', function(){
    expect( reverseNumber(159) ).to.be.equal(951);
  });
  it('should be -1', function(){
    expect( reverseNumber(-100) ).to.be.equal(-1);
  });
  it('should be -951', function(){
    expect( reverseNumber(-159) ).to.be.equal(-951);
  });
});
