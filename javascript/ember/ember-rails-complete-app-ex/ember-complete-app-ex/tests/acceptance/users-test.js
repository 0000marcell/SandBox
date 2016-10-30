import { test } from 'qunit';
import moduleForAcceptance from 'app4/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users');

test('visiting /users', function(assert) {
  visit('/users');
  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});

test('I can view the users', function(assert){
	let users = server.createList('user', 3);
	visit('/users');
	andThen(() => {
		assert.equal(find('div#item').length, 3);				
		assert.equal(find('div#item:first').text(), users[0].name);
	});
});
