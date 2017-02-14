// challenge description
// sample input -
// sample output -


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
        console.log( myFunc(line) );
    }
});
