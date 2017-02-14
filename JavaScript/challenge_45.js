
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

var fs  = require("fs"), z;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      z = driver( parseInt(line) );
      console.log( z.join(" ") );
    }
});
