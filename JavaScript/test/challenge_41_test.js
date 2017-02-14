/*
  Suppose we know that the array contains exactly one duplicated entry
  and that duplicate appears exactly twice. Find the duplicated entry.
  (For bonus points, ensure your solution has constant space and
  time proportional to N)

  5;0,1,2,3,0 ==> 0
  20;0,1,10,3,2,4,5,7,6,8,11,9,15,12,13,4,16,18,17,14 ==> 4
*/


var expect = require('chai').expect;

// create a frequency map
// stop when freq < 1

function cool(s) {
  var a = s.split(';')[1].split(',');
  var m = {}
    , i = 0, j = a.length;

  while (i < j ) {
   if ( m[ a[i] ] ) {
      return a[i];
    } else {
      m[ a[i] ] = 1;
    }
    i += 1
  }
  return null;
}

describe('cool()', function(){
  it('should be 0', function(){
    expect( cool("5;0,1,2,3,0") ).to.equal('0');
  });
  it('should be 0', function(){
    expect( cool("0;0,1,10,3,2,4,5,7,6,8,11,9,15,12,13,4,16,18,17,14") )
    .to.equal('4');
  });
});
