// var data = require('./data');
// var input = data.d3.split('');
// var input = ['^','v','^','v','^','v','^','v','^','v'];
// var input = ['>'];
var input = ['^','>', 'v','<']
var housesReceived = 1;
var currentLocation = new Coordinates(0,0);
var visitedLocations = [new Coordinates(currentLocation[0], currentLocation[1])];
var counter = 0;

function Coordinates(x,y){
  this.x = x;
  this.y = y;
}

for (var i = 0; i < input.length; i++) {
  counter++;
  switch(input[i]){
    case '^':
      currentLocation['x']++;
      if(visitedLocations.indexOf(currentLocation) === -1){
        housesReceived++;
        console.log(visitedLocations.indexOf(currentLocation))
      }
      visitedLocations.push(new Coordinates(currentLocation[0], currentLocation[1]));
      break;
    case 'v':
      currentLocation['x']--;
      if(visitedLocations.indexOf(currentLocation) === -1){
        housesReceived++;
        console.log(visitedLocations.indexOf(currentLocation))
      }
      visitedLocations.push(new Coordinates(currentLocation[0], currentLocation[1]));
      break;
    case '>':
      currentLocation['y']++;
      if(visitedLocations.indexOf(currentLocation) === -1){
        housesReceived++;
        console.log(visitedLocations.indexOf(currentLocation))
      }
      visitedLocations.push(new Coordinates(currentLocation[0], currentLocation[1]));
      break;
    case '<':
      currentLocation['y']--;
      if(visitedLocations.indexOf(currentLocation) === -1){
        housesReceived++;
        console.log(visitedLocations.indexOf(currentLocation))
      }
      visitedLocations.push(new Coordinates(currentLocation[0], currentLocation[1]));
      break;
  }
  console.log(visitedLocations)
}
console.log(housesReceived)