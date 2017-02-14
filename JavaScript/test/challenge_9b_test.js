/*
  Challenge 9; Stack

  Write a program which implements a stack interface for integers.
  The interface should have ‘push’ and ‘pop’ functions.
  Your task is to ‘push’ a series of integers and then ‘pop’
  and print every alternate integer.

*/

var expect = require('chai').expect
  , _obj
  ;

class StackLike {
  constructor() {
    this.stack = [];
  }

  get size() {
    return this.stack.length;
  }

  push(i) {
    this.stack.push(i);
  }

  pop() {
    if (this.size > 0 ) {
      return this.stack.pop();
    } else {
      return null;
    }
  }
}

function altPop(o) {
  let j = o.size
    , i = 0
    , output = []
    , p;

  while (i < j ) {
    p = o.pop();
    if (i % 2 == 0) {
      output.push( p );
    }
    i += 1;
  }
  return output.join(' ');
}

describe('altPop', function(){
  before(function(){
    _obj = new StackLike();
    _obj.push(1);
  })
  it('should work', function(){
    expect( altPop( _obj) ).to.be.equal('1');
  });
});

describe('StackLike Properties', function(){
   before(function() {
    _obj = new StackLike();
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

describe('StackLike function', function(){
  beforeEach(function(){
    _obj = new StackLike();
  });
  describe('Constructor', function(){
    it('New instance should have size 0', function(){
      expect( _obj.size ).to.be.equal(0);
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
      _obj.push(1);
      _obj.push(1);
      expect( _obj.size ).to.equal(2);
    });
  });
});
