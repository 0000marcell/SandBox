define('app4/tests/acceptance/users/user-test', ['exports', 'qunit', 'app4/tests/helpers/module-for-acceptance'], function (exports, _qunit, _app4TestsHelpersModuleForAcceptance) {

	(0, _app4TestsHelpersModuleForAcceptance['default'])('Acceptance | users/user');

	(0, _qunit.test)('visiting /users/user', function (assert) {
		var user = server.create('user');
		visit('/login');
		andThen(function () {
			fillIn(find('input[type=email]'), 'user0@gmail.com');
			fillIn(find('input[type=password]'), '123456');
			click('button#login');
			andThen(function () {
				assert.equal(currentURL(), '/users/1');
				assert.equal(find('h5').text(), user.name);
			});
		});
	});
});