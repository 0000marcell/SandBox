// apply

function Init() {
	this.name = 'marcell';
	this.sirname = 'cruz';

	return function(arg1, arg2){
		console.log(this.name+this.sirname);
		console.log(arg1, arg2);
	}
}

function Another(){
	var func = Init();
	this.name = 'joao';
	this.sirname = 'silva';
	func.apply(this, ['arg1', 'arg2']);
}

Another();


// using apply to chain constructors

Function.prototype.construct = function(aArgs) {
	var oNew = Object.create(this.prototype);
	this.apply(oNew, aArgs);
	return oNew;
}

function MyConstructor() {
	for(var nProp = 0; nProp < arguments.length; nProp++) {
		this['property'+nProp] = arguments[nProp];
	}
}

var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);
console.log(myInstance instanceof MyConstructor);
console.log(myInstance.constructor);

// Using apply in build-in functions 

var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);
//  the same as in var max = Math.max(...numbers);
console.log(max);
