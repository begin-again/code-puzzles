// challenge description
// sample input -
// sample output -

function findWriter(s) {
  var bits
  ,text = ""
  ,keys = ""
  ,keys_length = 0
  ,keys_i = 0
  ,int_key = 0
  ,output = ""
  ;

  bits = s.split("|");
  if (bits.length === 2 ) {
    text = " " + bits[0];
    keys = bits[1].split(" ");
    keys_length = keys.length;
    while( keys_i < keys_length ) {
      int_key = parseInt( keys[keys_i] )
      output += text.slice( int_key, int_key + 1 );
      keys_i += 1;
    }
  }
  return output;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log(findWriter(line));
    }
});
