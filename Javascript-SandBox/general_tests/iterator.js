var someString = new String("hi");          

someString[Symbol.iterator] = function() {
	return {
		next: function() {
			if (this._first) {
				this._first = false;
				return { value: "bye", done: false  };
			} else {
				return { done: true  };
			}
		},
	  _first: true
	};
};

for(var value of someString){
	console.log(value);
}


var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};

console.log([...myIterable]);
