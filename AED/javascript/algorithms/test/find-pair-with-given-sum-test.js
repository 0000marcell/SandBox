let findPairSum = require('../find-pair-with-given-sum');

QUnit.test( 'find pair with given', function( assert ) {
  assert.deepEqual(findPairSum(10), ["found at 1 and 5! \n", 
    "found at 2 and 4! \n"]);
});
