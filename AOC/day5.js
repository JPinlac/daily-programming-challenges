var data = require('./data');
var input = data.d5.split('.');
// var input = ['pineapple', "pinapplexy"];
var countNice = 0;
var reVowel = /[aeiou]/gi;
var reDouble = /([a-z])\1/i;
var reUnallowed = /ab|cd|pq|xy/;

for(var i = 0; i < input.length; i++){
  if (input[i].match(reVowel) && input[i].match(reVowel).length >= 3 &&  reDouble.test(input[i]) && !reUnallowed.test(input[i])){
    countNice++;
  }
}
console.log('part 1: '+countNice)


var countNice2 = 0;
var reDouble2 = /([a-z][a-z])[a-z]*\1/i;
var reSandwich = /([a-z])[a-z]\1/i;

for(var i = 0; i < input.length; i++){
  if (reDouble2.test(input[i]) && reSandwich.test(input[i])){
    countNice2++;
  }
}
console.log('part 2: ' +countNice2)


