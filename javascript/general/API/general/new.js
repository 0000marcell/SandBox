// length
let arr = [1, 2, 3];
console.log(arr.length);

// from
console.log(Array.from([1, 2, 3], x => x + 1));

// isArray
console.log(Array.isArray(arr));

// of
console.log(Array.of(1, 2, 3));

// concat
let arr2 = [2, 3, 4];
console.log(arr.concat(arr2));

// copyWithin
let arr3 = [1, 2, 3];
console.log(arr.copyWithin(0, 1));


// entries
let iterator = arr3.entries();
console.log(iterator.next().value[1]);
console.log(iterator.next().value[1]);

// every
arr3 = [3, 4, 5];
console.log(arr3.every(x => x > 2));

// fill
console.log(arr3.fill('marcell', 1, 2));

// filter
arr3 = [3, 4, 5];
console.log(arr3.filter(x => x > 3));

// find
console.log(arr3.find(x => x < 5));

// findIndex
console.log(arr3.findIndex(x => x < 5));

// forEach
arr3.forEach(x => console.log(x));

// indexOf
arr3 = [1, 2, 3];
console.log(arr3.indexOf(2));

// map 
console.log(arr3.map(x => x + 1));

// pop

// push

// reduce

// reduceRight

// reverse

// shift

// slice

// some

// sort

// splice

// toLocaleString

// unshift
