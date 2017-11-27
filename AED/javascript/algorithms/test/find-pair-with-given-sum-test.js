let findPairSum = require('../find-pair-with-given-sum');

QUnit.test( 'find pair with given', function( assert ) {
  assert.deepEqual(findPairSum(10), ["found at 0 and 2! \n", 
    "found at 1 and 4! \n", 
    "found at 2 and 0! \n", 
    "found at 4 and 1! \n"]);
});
