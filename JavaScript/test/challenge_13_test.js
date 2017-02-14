/*
  Challenge 13; REMOVE CHARACTERS
  Write a program which removes specific characters from a string.


  The first argument is a path to a file.
  The file contains the source strings and the characters that need to be scrubbed.
  Each source string and characters you need to scrub are delimited by comma.

*/

var expect = require('chai').expect
  , d1 = "how are you, abc"
  , d2 = "hello world, def"
  , e1 = "how re you"
  , e2 = "hllo worl"
  ;

function removeChars(a) {
  var s = a.split(",")
    , chars = s[1]
    , rx, out = ""
    , i = 1, j = chars.length
    ;
  while( i < j) {
    console.log("len: " + j + ", i: " + i );
    rx = new RegExp( chars[i] , 'g');
    out = s[0].replace(rx, "");
    s[0] = out;
    i += 1;
  }
  return out;
}

describe('removeChars()', function(){
  it('should work 1', function(){
    expect( removeChars(d1) ).to.be.equal(e1);
  });
  it('should work 2', function(){
    expect( removeChars(d2) ).to.be.equal(e2);
  });
});
