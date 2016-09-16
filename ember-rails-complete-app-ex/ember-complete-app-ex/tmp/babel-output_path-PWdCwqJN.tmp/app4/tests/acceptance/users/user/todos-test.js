define('app4/tests/acceptance/users/user/todos-test', ['exports', 'ember', 'qunit', 'app4/tests/helpers/start-app', 'ember-complete-app-ex/tests/helpers/module-for-acceptance', 'ember-complete-app-ex/tests/helpers/ember-simple-auth'], function (exports, _ember, _qunit, _app4TestsHelpersStartApp, _emberCompleteAppExTestsHelpersModuleForAcceptance, _emberCompleteAppExTestsHelpersEmberSimpleAuth) {

	var application = undefined,
	    user = undefined;

	(0, _emberCompleteAppExTestsHelpersModuleForAcceptance['default'])('Acceptance | users/user/todos', {
		beforeEach: function beforeEach() {
			application = (0, _app4TestsHelpersStartApp['default'])();
			user = server.create('user');
			(0, _emberCompleteAppExTestsHelpersEmberSimpleAuth.authenticateSession)(application);
		},
		afterEach: function afterEach() {
			_ember['default'].run(application, 'destroy');
		}
	});

	(0, _qunit.test)('visiting users/user/todos', function (assert) {
		server.createList('todos', 10, { user: user });
		visit('/users/1/todos');
		andThen(function () {
			assert.equal(find('div#item').length, 10);
			assert.equal(currentURL(), '/users/1/todos');
		});
	});

	(0, _qunit.test)('I can create a new todo', function (assert) {
		visit('/users/1/todos/new');
		andThen(function () {
			fillIn(find('input[type=text]'), 'New Item');
			click('button#form-submit');
			andThen(function () {
				assert.equal(currentURL(), '/users/1/todos/1');
				assert.equal(find('h5').text(), 'New Item');
			});
		});
	});

	(0, _qunit.test)('I can delete a todo', function (assert) {
		visit('users/1/todos');
		server.createList('todo', 2, { user: user });
		andThen(function () {
			click('a#delete');
			andThen(function () {
				assert.equal(find('div#item').length, 1);
			});
		});
	});

	(0, _qunit.test)('I can edit a todo', function (assert) {
		server.createList('todo', 1, { user: user });
		visit('users/1/todos/1/edit');
		andThen(function () {
			fillIn(find('input[type=text]'), 'Item Edited');
			click('button#form-submit');
			andThen(function () {
				assert.equal(currentURL(), '/users/1/todos');
				assert.equal(find('div#item:first span').text(), 'Item Edited');
			});
		});
	});
});