'use strict';

require('babel-polyfill');

var count = 0;
var p1 = new Promise(function (resolve, reject) {
	count++;
	setTimeout(function () {
		resolve(count);
	}, Math.random() * 200 + 100);
});

p1.then(function (value) {
	console.log('count value ' + value);
}).catch(function (reason) {
	console.log('the promise failed ' + reason);
});