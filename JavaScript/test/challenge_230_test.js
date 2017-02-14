
var expect = require('chai').expect
  ,d1 = '1 2 3 4 | 3 1 | 4 1', e1 = '1:1,2,3; 2:1; 3:1,2; 4:1,3;'
  ,d2 = '19 11 | 19 21 23 | 31 39 29', e2 = '11:1; 19:1,2; 21:2; 23:2; 29:3; 31:3; 39:3;'
  ,d3 = '11 1 12 43 |'
  ,e3 = '1:1; 11:1; 12:1; 43:1;'
  ,d4 = '9 2 17 34 | 24 47 1 2 6 | 41 | 24 15 | 10 27 21 49 28 40 9 | 25 26 38 23 19 18 37 | 39 27 28 43 29 1 3 | 44 38 | 21'
  ,e4 = '1:2,7; 2:1,2; 3:7; 6:2; 9:1,5; 10:5; 15:4; 17:1; 18:6; 19:6; 21:5,9; 23:6; 24:2,4; 25:6; 26:6; 27:5,7; 28:5,7; 29:7; 34:1; 37:6; 38:6,8; 39:7; 40:5; 41:3; 43:7; 44:8; 47:2; 49:5;'
  ;

// Creates an object of teams and countries
// expects that arr is an array of numbers and '|'
// ['1','2']
function createTeamMap(arr) {
  var country = 1
    ,m = {}
    ,j = arr.length
    ,i = 0
    ,team
    ;
  while( i < j ) {
    team = arr[i];
    if (team === "|") {
      country += 1;
    } else {
      if ( team in m ) {
        m[team].push(country);
      } else {
        m[team] = [country];
      }
    }
    i += 1;
  }
  return m;
}

// Transposes the map into teams and countries
// T1: C1, C2, C3;
// expects a map like {'1': [1,2,3]}
function createOutput(map) {
  var outString = ""
    ,k = ""
    ,teams = []
    ,i = 0
    ,j = 0
    ;
  for ( k in map) {
    teams.push(k);
  }
  teams.sort(function(a,b){
    return parseInt(a) - parseInt(b);
  });
  j = teams.length;
  while( i < j ) {
    outString += teams[i] + ":";
    outString += map[ teams[i] ].join(",");
    outString += "; ";
    i += 1;
  }
  return outString.trim();
}

function driver(str) {
  var m = createTeamMap( str.split(" ") )
    ,o = createOutput( m )
    ;
  return o;
}

describe('Integration', function() {
  it('should work for test 1', function(){
    expect( driver(d1) ).to.equal(e1);
  });
   it('should work for test 2', function(){
    expect( driver(d2) ).to.equal(e2);
  });
  it('should work for test 3', function(){
    expect( driver(d3) ).to.equal(e3);
  });
  it('should work for test 4', function(){
    expect( driver(d4) ).to.equal(e4);
  });
});

describe('createOutput()', function(){
  it('should be a string', function(){
    expect( createOutput() ).to.be.a('string');
  });
  it('should present teams in numerical ascending order', function(){
    expect( createOutput( {"25": [1,2], "3": [1,2] }) ).to.equal('3:1,2; 25:1,2;');
  });
});

describe('createTeamMap()', function() {
  it('should have 3 keys', function() {
    var x = createTeamMap( ['1','2','3'] );
    var y = {"1": [1], "2" : [1], "3": [1]}
    expect( x ).to.eql(y);
  });
  it('should set the "3" key to [1,2]', function() {
    var x = createTeamMap( ['1','2','3','|','3'] );
    var y = {"1": [1], "2" : [1], "3": [1,2]}
    expect( x ).to.eql(y);
  });
  it('should have 3 keys each with a country of 2', function() {
    var x = createTeamMap( ['|','1','2','3'] );
    var y = {"1": [2], "2" : [2], "3": [2]}
    expect( x ).to.eql(y);
  });
});


