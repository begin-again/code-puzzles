/*
  Challenge 8; Reverse Words

  Write a program which reverses the words in an input sentence.

  Hello World ==> World Hello

  no trailing spaces

*/

var expect = require('chai').expect;


function reverseWords(s) {
  var words = s.split(' ').reverse().join(' ');
  return words;
}


describe('reverseWords()', function(){
  it('should be this fuck', function(){
    expect( reverseWords('fuck this') ).to.be.equal('this fuck');
  });
});
