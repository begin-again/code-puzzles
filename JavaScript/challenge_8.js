
function reverseWords(s) {
  var words = s.split(' ').reverse().join(' ');
  return words;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log( reverseWords(line) );
    }
});
