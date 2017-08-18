var string = "21";
let arr = string.split("");
arr.splice(0, 0, '(')
arr.splice(3, 0, ')');
console.log(arr.join(""));
