var data = require('./data');
var input = data.d1.split('');
var count = 0;
var position = 1;

input.forEach(function(entry) {
	if (entry === '(')
		count++;
	else
		count--;
	if (count === -1)
		console.log('Basement position: ' + position);
	position++;
});

console.log('Final floor: ' + count);
