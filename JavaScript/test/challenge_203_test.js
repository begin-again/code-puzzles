
var expect = require('chai').expect
  ,d1 = '<--<<--<<', e1 = 2
  ,d2 = '<<>>--><--<<--<<>>>--><', e2 = 4
  ,d3 = '<-->>', e3 = 0
  ;

var leftArrow = '<--<<';
var rightArrow = '>>-->';
function numArrows(s) {
  var matches = 0;
  for(var i = 0; i < s.length; i++) {
    var aSlice = s.slice(i,i+5);
    if (aSlice.length < 5 ) {
      break;
    }
    if ( aSlice === leftArrow || aSlice === rightArrow ) {
      matches++;
    }
  }
  return matches;
}


describe('Challenge', function() {
  describe('numArrows()', function() {
    it('should be 2', function() {
      expect( numArrows(d1) ).to.equal(2);
    });
    it('should be 2', function() {
      expect( numArrows(d2) ).to.equal(4);
    });
    it('should be 0', function() {
      expect( numArrows(d3) ).to.equal(0);
    });
  });
});
