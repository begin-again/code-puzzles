/*
  Challenge 46; Primes < N


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

function getPrimes(N) {
  var primes = []
    ;
  if (N <= 2) {
    return [];
  } else {
    primes.push(2);
    for(var i = 3; i < N; i+= 1) {
      if (isPrime(i) ) {
        primes.push(i);
      }
    }
  }
  return primes.join(',');
}

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

describe('getPrimes()', function(){
  it('should be "2,3,5,7"', function(){
    expect( getPrimes(10) ).to.be.equal("2,3,5,7");
  });it('should be "2,3,5,7,11,13,17,19"', function(){
    expect( getPrimes(20) ).to.be.equal("2,3,5,7,11,13,17,19");
  });
});
