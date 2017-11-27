module.exports = function(sum) {
  let arr = [8, 7, 2, 5, 3, 1],
      results = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if((arr[i] + arr[j]) === sum){
        results.push(`found at ${i} and ${j}! \n`);
      }
    }
  }
  if(!results.length){
    return 'no results!';
  }
  return results;
}
