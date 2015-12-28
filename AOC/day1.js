var data = require('./data');
var input = data.d1p1.split('');
var count = 0;
input.forEach(function(entry) {
	if (entry === '('){
		count++;
	}
	else {
		count--;
	}
});
console.log(count);
