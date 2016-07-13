define('app4/tests/acceptance/signup-test', ['exports', 'qunit', 'app4/tests/helpers/module-for-acceptance'], function (exports, _qunit, _app4TestsHelpersModuleForAcceptance) {

	(0, _app4TestsHelpersModuleForAcceptance['default'])('Acceptance | signup');

	(0, _qunit.test)('visiting /signup', function (assert) {
		visit('/signup');

		andThen(function () {
			assert.equal(currentURL(), '/signup');
		});
	});

	(0, _qunit.test)('I can signup a new user', function (assert) {
		visit('/signup');
		andThen(function () {
			fillIn(find('input[type=text]'), 'John Doe');
			fillIn(find('input[type=email]'), 'johndoe@gmail.com');
			fillIn(find('input[type=password]'), '123456');
			click('button[type=submit]');
			andThen(function () {
				assert.equal(find('div#card-panel span').text().trim(), 'Confirmation message sent, check your email!');
			});
		});
	});
});