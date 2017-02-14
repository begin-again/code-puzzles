
function isPrime(n) {
  var i = 2
    , sqrt_n = Math.sqrt(n)
    ;
  while (i < sqrt_n) {
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

console.log( driver(1000) );
