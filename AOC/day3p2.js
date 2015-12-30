var data = require('./data');
var input = data.d3.split('');
// var input = ['^','v','^','v','^','v','^','v','^','v'];
// var input = ['>'];
// var input = ['^','>', 'v','<']
var housesReceived = 1;
var currentLocationSanta = new Coordinates(0,0);
var currentLocationRobot = new Coordinates(0,0);
var visitedLocations = [new Coordinates(currentLocationSanta['x'], currentLocationSanta['y']),new Coordinates(currentLocationRobot['x'], currentLocationRobot['y'])];

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
  if(i%2===0){
    switch(input[i]){
      case '^':
        currentLocationSanta['x']++;
        if(findCoord(visitedLocations, currentLocationSanta) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationSanta['x'], currentLocationSanta['y']));
        break;
      case 'v':
        currentLocationSanta['x']--;
        if(findCoord(visitedLocations, currentLocationSanta) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationSanta['x'], currentLocationSanta['y']));
        break;
      case '>':
        currentLocationSanta['y']++;
        if(findCoord(visitedLocations, currentLocationSanta) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationSanta['x'], currentLocationSanta['y']));
        break;
      case '<':
        currentLocationSanta['y']--;
        if(findCoord(visitedLocations, currentLocationSanta) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationSanta['x'], currentLocationSanta['y']));
        break;
    }
  } else{
    switch(input[i]){
      case '^':
        currentLocationRobot['x']++;
        if(findCoord(visitedLocations, currentLocationRobot) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationRobot['x'], currentLocationRobot['y']));
        break;
      case 'v':
        currentLocationRobot['x']--;
        if(findCoord(visitedLocations, currentLocationRobot) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationRobot['x'], currentLocationRobot['y']));
        break;
      case '>':
        currentLocationRobot['y']++;
        if(findCoord(visitedLocations, currentLocationRobot) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationRobot['x'], currentLocationRobot['y']));
        break;
      case '<':
        currentLocationRobot['y']--;
        if(findCoord(visitedLocations, currentLocationRobot) === -1){
          housesReceived++;
        }
        visitedLocations.push(new Coordinates(currentLocationRobot['x'], currentLocationRobot['y']));
        break;
    }
  }
}
console.log(housesReceived);