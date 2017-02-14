
function isValid(s) {
  var o_stk = []
    , pairs = {
       '(' : ["open", ")"   ]
      ,')' : ["closed", "(" ]
      ,'[' : ["open", "]"   ]
      ,']' : ["closed", "[" ]
      ,'{' : ["open", "}"   ]
      ,'}' : ["closed", "{" ]
      }
    , o_c
    , j = s.length
    , i = 0
    ;
  while ( i < j) {
    //console.log("Starting iteration: " + i );
    if (pairs[ s[i] ]) {
      oc = pairs[ s[i] ]
      //console.log(s[i] + " ==> oc: " + oc[0] + ", o_stk: " + o_stk);
      if ( oc[0] === "open" ) {
        //console.log("pushed '" + s[i] + "' onto o_stk");
        o_stk.push( s[i] );
      } else if ( oc[0] === "closed" ) {
        //console.log("is closed");
        if ( o_stk[o_stk.length-1] === oc[1] ) {
          // matched pair found
          o_stk.pop();
          //console.log("o_stk popped");
          i += 1;
          continue;
        } else {
          // mismatch found - no need to
          //console.log("mismatch!");
          return "False";
        }
      }
    }
    i += 1;
  }
  if (o_stk.length === 0) {
    return "True";
  } else {
    return "False";
  }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") { // ignore empty lines
      console.log( isValid(line) );
    }
});
