var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);
var max = Math.max(...numbers);
console.log(max);
