module.exports = function(sum) {
  let arr = [8, 7, 2, 5, 3, 1],
      results = [];
  arr.sort();
  let low = 0,
      high = arr.length - 1; 
  while(low < high){
    if(arr[low] + arr[high] === sum){
      results.push(`found at ${low} and ${high}! \n`);
    }
    (arr[low] + arr[high] > sum) ? --high : ++low;
  }
  if(!results.length){
    return 'no results!';
  }
  return results;
}
