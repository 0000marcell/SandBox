'use strict';
function currying(name){
	return function(size){
		return function(element){
			return name + ' is a '+ size + ' dragon that breathes '+
			element + '!';
		}
	}
}
console.log(currying('marcell')('big')('ice'));
