
var expect = require('chai').expect
  ,d1 = ['2','Hello World','CodeEval','Quick Fox', 'A','San Francisco']
  ,e1 = ['San Francisco','Hello World']
  ;

function topLongest(arStrings) {
  var numStrings = parseInt(arStrings.shift() );
  var orderedStrings = arStrings.sort(
    function(a,b) {
      return (b.length - a.length);
    }
  );
  var topStrings = [];
  for(var i = 0; i < numStrings; i++) {
    topStrings.push(orderedStrings[i]);
  }
  return topStrings;
}

var x = topLongest(d1);
describe('topLongest()', function() {
  it('should be 2', function() {
    expect( x.length ).to.equal(2);
  });
  it('should be right', function() {
    var e = ['San Francisco','Hello World'];
    expect( x ).to.be.eql(e);
  });
});


