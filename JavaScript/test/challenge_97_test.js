/*
  Challenge 97; FIND A WRITER

  Each numer to the right of the pipe repesents a position in the
  string to the left of the pipe. String starts at position 1.

*/

var expect = require('chai').expect
  ,d1 = 'osSE5Gu0Vi8WRq93UvkYZCjaOKeNJfTyH6tzDQbxFm4M1ndXIPh27wBA rLclpg| 3 35 27 62 51 27 46 57 26 10 46 63 57 45 15 43 53'
  ,d2 = '3Kucdq9bfCEgZGF2nwx8UpzQJyHiOm0hoaYP6ST1WM7Nks5XjrR4IltBeDLV vA| 2 26 33 55 34 50 33 61 44 28 46 32 28 30 3 50 34 61 40 7 1 31'
  ,e1 = 'Stephen King 1947'
  ,e2 = 'Kyotaro Nishimura 1930'
  ;


function findWriter(s) {
  var bits
  ,text = ""
  ,keys = ""
  ,keys_length = 0
  ,keys_i = 0
  ,int_key = 0
  ,output = ""
  ;

  bits = s.split("|");
  if (bits.length === 2 ) {
    text = " " + bits[0];
    keys = bits[1].split(" ");
    keys_length = keys.length;
    while( keys_i < keys_length ) {
      int_key = parseInt( keys[keys_i] )
      output += text.slice( int_key, int_key + 1 );
      keys_i += 1;
    }
  }
  return output;
}

describe('findWriter()', function() {
  it('should be a string', function(){
    expect( findWriter('') ).to.be.a('string');
  });
  it('should be "Stephen King 1947"', function(){
    expect( findWriter(d1) ).to.be.equal(e1);
  });
  it('should be "Kyotaro Nishimura 1930"', function(){
    expect( findWriter(d2) ).to.be.equal(e2);
  });
});
