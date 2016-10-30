import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /application', function(assert) {
  visit('/application');

  andThen(function() {
    assert.equal(currentURL(), '/application');
  });
});

test('I can run the function', function(){
	visit('/');	
	andThen(() => {
		click("button[data-autoId='testButton']");
	});
});
