import { test } from 'qunit';
import moduleForAcceptance from 'app4/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | signup');

test('visiting /signup', function(assert) {
  visit('/signup');

  andThen(function() {
    assert.equal(currentURL(), '/signup');
  });
});

test('I can signup a new user', function(assert){
	visit('/signup');		
	andThen(() => {
		fillIn(find('input[type=text]'), 'John Doe');
		fillIn(find('input[type=email]'), 'johndoe@gmail.com');
		fillIn(find('input[type=password]'), '123456');
		click('button[type=submit]');
		andThen(() => {
			assert.equal(find('div#card-panel span').text().trim(), 
						'Confirmation message sent, check your email!');	
		});
	});
});
