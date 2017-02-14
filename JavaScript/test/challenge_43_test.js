/*
  Challenge 43: Jolly Jumpers

  A sequence of n > 0 integers is called a jolly jumper if the
  absolute values of the differences between successive elements
  take on all possible values 1 through n - 1. eg.

  1 4 2 3  is a jolly jumper, because the absolute
  differences are 3, 2, and 1, respectively. The definition implies
  that any sequence of a single integer is a jolly jumper.
  Write a program to determine whether each of a number of
  sequences is a jolly jumper.

  INPUT SAMPLE:

  Your program should accept as its first argument a path
  to a filename. Each line in this file is one test case.
  Each test case will contain an integer n < 3000 followed
  by n integers representing the sequence.
  The integers are space delimited.

  For example:

  4 1 4 2 3 ==> Jolly   (321)
  3 7 7 8  ==> Not Jolly  (01)
  9 8 9 7 10 6 12 17 24 38 ==> Not Jolly (1,1,2,3,4,6,5,7,14)
  (1,3,2)
  1 ==> Jolly

*/

var expect = require('chai').expect;

function isJolly(s) {
  var a = s.split(' ').slice(1).map(Number)
    , i = 0, j = 0
    , result = true
    , diffs = []
    ;

  console.log("src: " + a);
  // get diffs
  for(j = a.length-1; i < j; i+= 1) {
    diffs.push(Math.abs(a[i] - a[i+1]));
  }
  // sort ascending
  diffs.sort(function(a,b){return parseInt(a) - parseInt(b);});
  console.log("diffs: " + diffs);

  // go through sequence
  for(i = 0, j = diffs.length; i < j; i += 1 ) {
    console.log("mismatch: " + ( (i+1) != diffs[i]));
    if ((i+1) != diffs[i] ) {
      result = false;
      break;
    }
  }
  return result;
}

describe('isJolly(s)', function(){
  it('4 1 4 2 3 should be true', function(){
    expect( isJolly('4 1 4 2 3') ).to.be.ok;
  });
  it('4 1 2 3 4 should be false', function(){
    expect( isJolly('4 1 2 3 4') ).to.not.be.ok;
  });
  it('3 7 7 8 should be false', function(){
    expect( isJolly('3 7 7 8') ).to.not.be.ok;
  });
  it('2 7 8 should be false', function(){
    expect( isJolly('2 7 8') ).to.be.ok;
  });
  it('9 8 9 7 10 6 12 17 24 38 should be false', function(){
    expect( isJolly('9 8 9 7 10 6 12 17 24 38') ).to.not.be.ok;
  });
  it('1 1 should be true', function(){
    expect( isJolly('1 1') ).to.be.ok;
  });
  it('1 2 should be true', function(){
    expect( isJolly('1 2') ).to.be.ok;
  });
});
