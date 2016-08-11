define('app4/tests/acceptance/users-test', ['exports', 'qunit', 'app4/tests/helpers/module-for-acceptance'], function (exports, _qunit, _app4TestsHelpersModuleForAcceptance) {

	(0, _app4TestsHelpersModuleForAcceptance['default'])('Acceptance | users');

	(0, _qunit.test)('visiting /users', function (assert) {
		visit('/users');
		andThen(function () {
			assert.equal(currentURL(), '/users');
		});
	});

	(0, _qunit.test)('I can view the users', function (assert) {
		var users = server.createList('user', 3);
		visit('/users');
		andThen(function () {
			assert.equal(find('div#item').length, 3);
			assert.equal(find('div#item:first').text(), users[0].name);
		});
	});
});