var data = require('./data')
var input = data.d2.split(',');

//Finds total wrapping paper needed
var wrappingTotal = 0;
for (var i = 0; i < input.length; i++) {
  var box = input[i].split('x');
  var l = box[0];
  var w = box[1];
  var h = box[2];

  var smallestSide = l * w;
  if(w*h < smallestSide)
    smallestSide = w*h;
  if(h*l < smallestSide)
    smallestSide = h*l;

  wrappingTotal += (2*l*w) + (2*w*h) + (2*h*l) + smallestSide;
}
console.log(wrappingTotal)

//Finds total ribbon needed
var ribbonTotal = 0;
for (var x = 0; x < input.length; x++){
  var box = input[x].split('x');

  //convert strings into integers
  box.forEach(function(value, index){
    box[index]=parseInt(box[index]);
  })
  //then sorts the array of lengths, by default sort() sorts using strings, compare function is for sorting numbers
  box.sort(function(a,b){
    return a-b;
  });

  ribbonTotal += 2*box[0] + 2*box[1] + (box[0]*box[1]*box[2]);
}
console.log(ribbonTotal);