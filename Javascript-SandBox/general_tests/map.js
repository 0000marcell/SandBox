var kvArray = [["key1", "value1"], ["key2", "value2"]];

//Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get("key1"); // returns "value1"

// Use the spread operator to transform a map into a 2D key-value Array.
console.log([...myMap]); // Will show you exactly the same Array as kvArray

// Or use the spread operator on the keys or values iterator to get 
// an array of only the keys or values
console.log(myMap.keys()); // Will show ["key1", "key2"]
