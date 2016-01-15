import 'babel-polyfill';
var count = 0;
var p1 = new Promise( (resolve, reject) => {
	count++;
	setTimeout( () => {
		resolve(count);	
	}, Math.random() * 200 + 100);
});

p1.then( (value) => {
	console.log(`count value ${value}`);
}).catch( (reason) => {
	console.log(`the promise failed ${reason}`);	
});
