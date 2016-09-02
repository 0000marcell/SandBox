function* makeSimpleGenerator(array){
	var nextIndex = 0;
	while(nextIndex < array.length){
		yield array[nextIndex++];
	}
}

var gen = makeSimpleGenerator(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* idMaker(){
	var index = 0;
	while(true)
		yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
