/*
  Challenge 83; Beautiful words

  When John was a little kid he didn't have much to do.
  There was no internet, no Facebook, and no programs to hack on.
  So he did the only thing he could...
  he evaluated the beauty of strings in a quest to discover the most beautiful string in the world.

  Given a string s, little Johnny defined the beauty of the string as the sum of the beauty of
  the letters in it. The beauty of each letter is an integer between 1 and 26, inclusive,
  and no two letters have the same beauty. Johnny doesn't care about whether letters are
  uppercase or lowercase, so that doesn't affect the beauty of a letter.
  (Uppercase 'F' is exactly as beautiful as lowercase 'f', for example.)
*/

var expect = require('chai').expect
  ,d1 = 'ABbCcc'
  ,d2 = 'Good luck in the Facebook Hacker Cup this year!'
  ,d3 = 'Ignore punctuation, please :)'
  ,d4 = 'Sometimes test cases are hard to make up.'
  ,d5 = 'So I just go consult Professor Dalves'
  ,e1 = 152
  ,e2 = 754
  ,e3 = 491
  ,e4 = 729
  ,e5 = 646
  ;

function justLetters(s) {
  var temp;
  var temp = s.toUpperCase().split("").filter( function(e,i,a) {
      return e.match(/^[A-Z]$/i);
    });
  return temp;
}

function createMap(arr) {
  var m = {}
    ,j = arr.length
    ,i = 0
    ,key
    ;

  while( i < j ) {
    key = arr[i];
    if ( key in m ) {
      m[key] += 1;
    } else {
      m[key] = 1;
    }
    i += 1;
  }
  return m;
}

function Score(s) {
  var map = createMap( justLetters(s) )
    , vals = []
    , k
    , i = 0
    , j = 0
    , beauty = 26
    , sum = 0
    ;

  // make an array of values
  Object.keys(map).forEach(function(key) {
    vals.push( map[key] );
  });

  // sort values in numerical reverse order
  vals.sort( function(a,b) {
    return b - a;
  });

  j = vals.length;
  while( i < j) {
    sum += beauty * vals[i];
    beauty -= 1
    i += 1
  }

  return sum;
}

describe('createMap()', function(){
  it('should be {1:1}', function(){
    expect( createMap(['1']) ).to.be.eql({'1':1});
  });
  it('should be {1:2}', function(){
    var x = "ABBCCC".split("");
    expect( createMap(x) ).to.be.eql({'A':1, 'B': 2, 'C': 3});
  });
});

describe('justLetters()', function(){
  it('should be an array', function(){
    expect( justLetters('a!') ).to.be.an.instanceof(Array);
  });
  it('should be of size 1', function(){
    expect( justLetters('a! _').length ).to.be.equal(1);
  });
  it('should contain just A', function(){
    expect( justLetters('a! _')[0] ).to.be.equal('A');
  });
});

describe('Score()', function(){
  it('should be a number', function(){
    expect( Score('A') ).to.be.a('number');
  });
  it('should be a 152', function(){
    expect( Score(d1) ).to.equal(e1);
  });
  it('should be a 754', function(){
    expect( Score(d2) ).to.equal(e2);
  });
  it('should be a 491', function(){
    expect( Score(d3) ).to.equal(e3);
  });
  it('should be a 729', function(){
    expect( Score(d4) ).to.equal(e4);
  });
  it('should be a 646', function(){
    expect( Score(d5) ).to.equal(e5);
  });
});
