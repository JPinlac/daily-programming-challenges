// var data = require('./data');
// var input = data.d3.split('');
var input = ['^','v','^','v','^','v','^','v','^','v'];

var housesReceived = 0;
var currentLocation = [0,0];
var visitedLocations = [];

for (var i = 0; i < input.length; i++) {
  switch(input[i]){
    case '^':
      currentLocation[0]++;
      if(visitedLocations.indexOf(x))
      visitedLocations.push(currentLocation);
      break;
  }
}