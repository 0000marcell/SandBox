QUnit.test('run a test', function(assert){
	assert.ok("everything is fine!");
});


QUnit.test('Header component exist', function(assert){
	headerComp('title', 'image');
	assert.ok($('#header-comp').length);
});

QUnit.test('Title is inserted in Header Component', function(assert){
	assert.ok($('#header-comp').length);
});

QUnit.test('Test Types', function(assert){
	assert.equal('2', 2);	
});
