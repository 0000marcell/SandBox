import { test } from 'qunit';
import moduleForAcceptance from 'app4/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('I can login', function(assert){
	server.create('user');
	visit('/login');	
	andThen(() => {
		fillIn(find('input[type=email]'), 'user0@gmail.com');
		fillIn(find('input[type=password]'), '123456');
		click('button#login');
		assert.ok(find('div#spinner'));
		andThen(() => {
			assert.notOk(find('div#spinner'));
			assert.equal(currentURL(), '/users/user0');
		});
	});
});
