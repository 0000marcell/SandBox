let subArrayWithZero = require('../sub-array-with-0-test');

QUnit.test( 'sub-array-with-0', function( assert ) {
  assert.deepEqual(subArrayWithZero(), ["found at 1 and 5! \n", 
    "found at 2 and 4! \n"]);
});
