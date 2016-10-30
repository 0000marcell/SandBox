'use strict';
//the nested function inside init is a closure, and uses the scope of 
//its parent
function init(){
	let phrase = 'dont let your dreams be dreams!';
	return function(){
		console.log(phrase);
	}
}

let doit = init();
doit();
