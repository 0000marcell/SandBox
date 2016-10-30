var add = require('./add.js');

QUnit.test( "hello test", function(assert) {
	assert.ok( 1 == "1", "Passed!");
});

QUnit.test('it should equals 2', function(assert){
	assert.equal(2, add(1, 1));
	add(2, 2);
});


