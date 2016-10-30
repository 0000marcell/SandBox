Promise.reject('fail').then(function(val){
	// will not run
}, function(val){
	console.log('fail');
});

Promise.reject('fail').catch(function(val){
		console.log(val);
});
