
function Triangle(a) {
  var rowCounter = 0
    , offset = 0
    , sum = 0
    ;
  this.offset = function() {
    return offset;
  };
  this.sum = function() {
    return sum;
  };
  this.rowCounter = function() {
    return rowCounter;
  };
  this.addRow = function() {
    var n = arguments[0].split(' ');
    sum += parseInt(n[offset]);
    rowCounter += 1;
    if (rowCounter % 2 === 0 ) {
       offset += 1;
    }
    n = null;
  };
}

var fs  = require("fs")
  , t = new Triangle();
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      t.addRow(line);
    }
});
console.log(t.sum());
