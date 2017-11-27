arr = [0, 2, 3, 5];

arr.forEach((x, i) => {
  if(i === 1){
    return;
  }
  console.log('%s', i);
});
