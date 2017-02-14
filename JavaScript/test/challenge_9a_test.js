/*
  Challenge 9; Stack

  Write a program which implements a stack interface for integers.
  The interface should have ‘push’ and ‘pop’ functions.
  Your task is to ‘push’ a series of integers and then ‘pop’
  and print every alternate integer.

  CodeEval doesn't allow for let, const, or class
  must use the old-sty

*/

var expect = require('chai').expect
  , _obj
  ;

function Stacker(){
  var stack = [];
  this.size = function() {
    return stack.length;
  }
  this.push = function() {
    for(var i =0; i < arguments.length; i+= 1) {
      stack.push(arguments[i]);
    }
  }
  this.pop = function(){
    if (stack.length > 0 ) {
      return stack.pop();
    } else {
      return null;
    }
  }
}


function altPop(o) {
  var j = o.size()
    , i = 0
    , output = []
    , p;

  while (i < j ) {
    p = o.pop();
    if (i % 2 === 0) {
      output.push( p );
    }
    i += 1;
  }
  return output.join(' ');
}

describe('altPop', function(){
  before(function(){
    _obj = new Stacker();
    _obj.push(1);
  })
  it('should work', function(){
    expect( altPop( _obj) ).to.be.equal('1');
  });
});

describe('Stacker Properties', function(){
   before(function() {
    _obj = new Stacker();
  });
  it('should instantiate to an object', function(){
    expect( typeof(_obj) ).to.be.equal('object');
  });
  it('should respond to size', function(){
    expect( _obj ).to.have.property('size');
  });
  it('should respond to push', function(){
    expect( _obj ).to.have.property('push');
  });
  it('should respond to pop', function(){
    expect( _obj ).to.have.property('pop');
  });
});

describe('Stacker function', function(){
  beforeEach(function(){
    _obj = new Stacker();
  });
  describe('Constructor', function(){
    it('New instance should have size 0', function(){
      expect( _obj.size() ).to.be.equal(0);
    });
  })
  describe('Pop()', function() {
    it('Pop should be null if size is zero', function(){
      expect( _obj.pop() ).to.be.null;
    });
    it('Pop should not be null if size is >0', function(){
      _obj.push(1);
      expect( _obj.pop() ).to.not.be.null;
    });
    it('Pop should not be null if size is >0', function(){
      _obj.push(1);
      expect( _obj.pop() ).to.not.be.null;
    });
    it('Pop should be identical to last pushed item', function(){
      _obj.push('tuna');
      expect( _obj.pop() ).to.be.equal('tuna');
    });
  });
  describe('Push()', function(){
    it('Push increments size property', function(){
      _obj.push(1,1);
      expect( _obj.size() ).to.equal(2);
    });
    it('Push increments size property', function(){
      _obj.push(1);
      _obj.push("2");
      expect( _obj.size() ).to.equal(2);
    });
  });
});
