import Ember from 'ember';
import { test } from 'qunit';
import startApp from '../../../helpers/start-app';
import moduleForAcceptance from 'ember-complete-app-ex/tests/helpers/module-for-acceptance';
import { authenticateSession } from 'ember-complete-app-ex/tests/helpers/ember-simple-auth';

let application, user;

moduleForAcceptance('Acceptance | users/user/todos', {
	beforeEach(){
		application = startApp();		
		user = server.create('user');
		authenticateSession(application);
	},
	afterEach(){
		Ember.run(application, 'destroy');
	}
});

test('visiting users/user/todos', function(assert) {
	server.createList('todos', 10, { user });	
	visit('/users/1/todos');
	andThen(() => {
		assert.equal(find('div#item').length, 10);				
		assert.equal(currentURL(), '/users/1/todos');
	});
});

test('I can create a new todo', function(assert){
	visit('/users/1/todos/new');
	andThen(() => {
		fillIn(find('input[type=text]'), 'New Item');	
		click('button#form-submit');
		andThen(function() {
		assert.equal(currentURL(), '/users/1/todos/1');
			assert.equal(find('h5').text(), 'New Item');				
		});
	});
});

test('I can delete a todo', function(assert){
	visit('users/1/todos');	
	server.createList('todo', 2, { user });	
	andThen(() => {
		click('a#delete');
		andThen(() => {
			assert.equal(find('div#item').length, 1);	
		});
	});
});

test('I can edit a todo', function(assert){
	server.createList('todo', 1, { user });
	visit('users/1/todos/1/edit');	
	andThen(() => {
		fillIn(find('input[type=text]'), 'Item Edited');
		click('button#form-submit');
		andThen(() => {
			assert.equal(currentURL(), '/users/1/todos');
			assert.equal(find('div#item:first span').text(), 'Item Edited');	
		});
	});
});
