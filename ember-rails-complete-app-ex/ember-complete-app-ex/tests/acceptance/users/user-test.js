import { test } from 'qunit';
import moduleForAcceptance from 'app4/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users/user');

test('visiting /users/user', function(assert) {
	let user = server.create('user');
	visit('/login');	
	andThen(() => {
		fillIn(find('input[type=email]'), 'user0@gmail.com');
		fillIn(find('input[type=password]'), '123456');
		click('button#login');
		andThen(() => {
			assert.equal(currentURL(), '/users/1');
			assert.equal(find('h5').text(), user.name);
		});
	});
});
