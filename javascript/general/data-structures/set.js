var kvArr = [['value', 2], ['value', 2], ['other', 3]]
var newSet = new Set(kvArr);
var otherSet = new Set(kvArr);

var myArr = [v for (v of newSet)];
console.log(myArr);
