var data = require('./data');
var input = data.d4;

//quick way to add vanilla javascript libraries to node
eval(require('fs').readFileSync('./md5.js', 'utf-8'));

var number = 0;
var concat = input + number
var hash = '';
do{
  concat = input + number;
  hash = md5(concat);
  number++;
} while (hash.substring(0,6) !== '000000');

console.log(number-1);
console.log(hash);
