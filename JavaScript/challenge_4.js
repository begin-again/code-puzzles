
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
    ;
  while (primeCount < maxPrimes) {
    if (isPrime(iValue) ) {
      primeCount += 1;
      primeSum += iValue;
    }
    iValue += 1;
  }
  return primeSum;
}

console.log(sumPrimes(1000));
