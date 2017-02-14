
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

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") { // ignore empty lines
    console.log( getPrimes( parseInt(line)) );
  }
});
