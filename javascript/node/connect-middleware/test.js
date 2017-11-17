let  array = [1, 2, 3, 4];
let result = array.find((element) => {
  return (element === 6) ? true : false;
});

console.log('result: %s', result);
