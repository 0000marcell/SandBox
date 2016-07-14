define('app4/tests/acceptance/login-test', ['exports', 'qunit', 'app4/tests/helpers/module-for-acceptance'], function (exports, _qunit, _app4TestsHelpersModuleForAcceptance) {

	(0, _app4TestsHelpersModuleForAcceptance['default'])('Acceptance | login');

	(0, _qunit.test)('visiting /login', function (assert) {
		visit('/login');
		andThen(function () {
			assert.equal(currentURL(), '/login');
		});
	});

	(0, _qunit.test)('I can login', function (assert) {
		server.create('user');
		visit('/login');
		andThen(function () {
			fillIn(find('input[type=email]'), 'user0@gmail.com');
			fillIn(find('input[type=password]'), '123456');
			click('button#login');
			assert.ok(find('div#spinner'));
			andThen(function () {
				assert.notOk(find('div#spinner'));
				assert.equal(currentURL(), '/users/user0');
			});
		});
	});
});