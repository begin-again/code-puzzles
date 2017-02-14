
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


var fs  = require("fs")
  , nums
  , j = 0
  , i = 0
  , _obj
  ;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        nums = line.split(' ');
        i = 0
        j = nums.length;
        _obj = new Stacker();
        while (i < j) {
          _obj.push(nums[i]);
          i += 1;
        }
        console.log( altPop(_obj) );
    }
});
