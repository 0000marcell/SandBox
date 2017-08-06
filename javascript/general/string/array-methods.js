let arr = [1, 2, 3, 4];

// length
console.log(arr.length);

// Array.from(arrayLike[, mapFn[, thisArg]])
// create a array from any iterable
console.log(Array.from(arr));
console.log(Array.from([1, 2, 3], x => x + 1));

// Array.isArray(obj)
console.log(Array.isArray(arr));

// Array.of(element0[, element1[, ...[, elementN]]])
console.log(Array.of(1, 2, 3, 4));

// Array concat
let arr2 = ["a", "b", "c"];
console.log(arr.concat(arr2));

// arr.copyWithin(target, start[, end = this.length])
console.log(arr.copyWithin(0, 2, 4)); // 3, 4, 3, 4
//console.log(arr.copyWithin(3, 1)); //1, 2, 3, 2
//
let arr3 = ['a', 'b', 'c'],
    iterator = arr3.entries();
console.log(iterator.next().value);

// arr.every 
console.log(arr.every((x) => { return x >= 0 }));

// arr.fill(value)
// arr.fill(value, start)
// arr.fill(value, start, end)
console.log(arr.fill('marcell', 0));

// arr.filter(callback[, thisArg])
let arr4 = [1, 2, 3, 4];
console.log(arr4.filter(x => x > 1));

// arr.find(callback[, thisArg])
// only returns one element
arr4 = [2, 3, 4, 5, 6, 7, 8];
console.log(arr4.find(x => x > 5));

// arr.findIndex(callback[, thisArg])
arr4 = [2, 3, 4, 5, 6, 7, 8];
console.log(arr4.findIndex(x => x > 4));

// arr.forEach(callback[thisArg])
arr4.forEach(x => console.log(x));

// indexOf(value[, from index])
console.log(arr4.indexOf(5));

// map(callBack[, thisArg])
arr = arr4.map(x => x + 1);
console.log(arr);

// pop() 
console.log(arr.pop());

// push(element, element2)
arr.push(1, 2, 3)
console.log(arr);

// reduce(callback, initialValue)
console.log(arr.reduce((sum, value) => sum + value));

// reduceRight(calback[, initialValue]) goes from right to left
console.log(arr.reduceRight((sum, value) => sum - value));

// reverse() reverses the array in place
console.log(arr.reverse());

// shift() removed the first element of the array and returns that element
console.log(arr.shift());

// slice(1, 3) returns a new array  
console.log(arr.slice(1, 3));

// some(callBack[, thisArg]) // verifies if one of more items in the array passes the test
console.log(arr.some(x => x > 7));

// sort([compareFunction]) // sort the elements
console.log(arr.sort());
console.log(arr.sort((a, b) => b - a));

// splice(start, deleteCount, item1, item2)
arr = [1, 2, 3, 4, 5];
arr.splice(0, 1, 'marcell', 'monteiro', 'cruz');
console.log(arr);

// toLocaleString() apply toLocaleString in the elements
arr = [1, new Date(), 2];
console.log(arr.toLocaleString());

// unshift(elements) // add elements to the beggining of the array
arr = [1, 2];
arr.unshift(1, 2, 3);
console.log(arr);
