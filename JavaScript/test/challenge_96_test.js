/*
  challenge 96; swap case



*/

var expect = require('chai').expect
  , d1 = 'Hello world!'
  , d2 = 'JavaScript language 1.8'
  , d3 = 'A letter'
  , e1 = 'hELLO WORLD!'
  , e2 = 'jAVAsCRIPT LANGUAGE 1.8'
  , e3 = 'a LETTER'
  ;

function swapCase(s) {
  var i = 0
    , j = s.length
    , out = ""
    , tmp = ""
    ;
  while(i < j) {
    if (s[i] === s[i].toUpperCase() ) {
      out += s[i].toLowerCase();
    } else {
      out += s[i].toUpperCase();
    }
    i += 1;
  }
  return out;
}

describe('swapCase()', function(){
  it('should work', function(){
    expect(swapCase(d1)).to.equal(e1);
  });
  it('should work', function(){
    expect(swapCase(d2)).to.equal(e2);
  });
  it('should work', function(){
    expect(swapCase(d3)).to.equal(e3);
  });
});
