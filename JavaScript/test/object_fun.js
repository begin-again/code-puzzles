/*
  object fun

*/

var expect = require('chai').expect;

function myObject(){
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
          return this.stack.pop();
        } else {
          return null;
        }
    }
}


describe('myObject', function(){
  beforeEach(function(){
    o = new myObject();
  });
  it('size should be zero', function(){
    expect( o.size() ).to.be.equal(0);
  });
  it('size should be 5', function(){
    o.push(5);
    expect( o.size() ).to.be.equal(1);
  });
  it('size should be 3', function(){
    o.push(5, 2, "wanker");
    expect( o.size() ).to.be.equal(3);
  });
});
