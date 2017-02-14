/*
  Challenge 4; Sum of Primes

  sum of first 1000 primes

  = 3682913
*/

var expect = require('chai').expect;

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

function sumPrimes(maxPrimes, showLog) {
  var primeCount = 0
    , primeSum = 0
    , iValue = 2
    , primes = []
    ;
  while (primeCount < maxPrimes) {
    if (isPrime(iValue) ) {
      primes.push(iValue);
      primeCount += 1;
      primeSum += iValue;
    }
    iValue += 1;
  }
  if (showLog) {
    console.log(primes.join(', '));
  }
  return primeSum;
}

describe('sumPrimes()', function(){
  it('should be 3682913', function(){
    expect( sumPrimes(1000) ).to.be.equal(3682913);
  });
  it('should be right', function(){
    expect( sumPrimes(10,true) ).to.be.equal(129);
  });
});

describe('isPrime()', function() {
  it('should be true', function() {
    expect( isPrime(11) ).to.be.ok;
  });
  it('should be false', function() {
    expect( isPrime(100) ).to.not.be.ok;
  });
  it('should be false', function() {
    expect( isPrime(4) ).to.not.be.ok;
  });
});
