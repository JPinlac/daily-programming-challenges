var data = require('./data');
var input = data.d3.split('');

var housesReceived = 1;
var currentLocation = new Coordinates(0,0);
var visitedLocations = [new Coordinates(currentLocation['x'], currentLocation['y'])];

function Coordinates(x,y){
  this.x = x;
  this.y = y;
}

function findCoord(array, coord) {
  for (var i = 0; i < array.length; i++){
    if(array[i].x == coord.x && array[i].y == coord.y){
      return i;
    }
  }
  return -1;
}

for (var i = 0; i < input.length; i++) {
  switch(input[i]){
    case '^':
      currentLocation['x']++;
      if(findCoord(visitedLocations, currentLocation) === -1){
        housesReceived++;
      }
      visitedLocations.push(new Coordinates(currentLocation['x'], currentLocation['y']));
      break;
    case 'v':
      currentLocation['x']--;
      if(findCoord(visitedLocations, currentLocation) === -1){
        housesReceived++;
      }
      visitedLocations.push(new Coordinates(currentLocation['x'], currentLocation['y']));
      break;
    case '>':
      currentLocation['y']++;
      if(findCoord(visitedLocations, currentLocation) === -1){
        housesReceived++;
      }
      visitedLocations.push(new Coordinates(currentLocation['x'], currentLocation['y']));
      break;
    case '<':
      currentLocation['y']--;
      if(findCoord(visitedLocations, currentLocation) === -1){
        housesReceived++;
      }
      visitedLocations.push(new Coordinates(currentLocation['x'], currentLocation['y']));
      break;
  }
}
console.log(housesReceived);