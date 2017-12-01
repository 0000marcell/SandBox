let findSubWithZero = require('../find-sub-with-zero'); 

QUnit.test('find-sub-with-zero', function(assert){ 
  let array = [3, 4, -7, 3, 1, 3, 1, 
               -4, -2, -2];
	assert.deepEqual(findSubWithZero(array), [
    [3, 4, -7],
    [4, -7, 3],
    [-7, 3, 1, 3],
    [3, 1, -4],
    [3, 1, 3, 1, -4, -2, -2],
    [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
  ]); 
});
