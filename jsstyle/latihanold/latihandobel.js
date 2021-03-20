var s = '';
for (var i = 0; i < 5; i++) {
	s = s + '*'; // s += '*';

	s += '\n' ;
}
console.log(s);



var n = '';
for (var z = 0; z < 5; z++) {
	for (var x = 0; x < 5; x++) {
		n += '*';
	}
n += '\n';
}
console.log(n);


var r = '';
for (var p = 0; p < 10; p++) {
	for (var t = 0; t <= p; t++) {
		r += '*';
	}
r += '\n';
} 
console.log(r);


var y = '';
for (var m = 10; m < 0; m--) {
	for (var b = 0; b < m; b++) {
		y += '*';
	}
y += '\n';
} 
console.log(y);