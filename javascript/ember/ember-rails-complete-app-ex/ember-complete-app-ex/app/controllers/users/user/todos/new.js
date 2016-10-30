import Ember from 'ember';

export default Ember.Controller.extend({
	msgVisible: false,
	msgColor:		'',
	msgContent: 'Todo not saved!',
	todosController: Ember.inject.controller('users/user/todos'),
	todos: Ember.computed.reads('todosController.model'),
	authManager: Ember.inject.service('session'),
	actions: {
		save(){
			let model = this.get('model');
			model.set('user_id', this.get('authManager.data.authenticated.user.id'));
			model.save().then((model) => {
				this.set('msgVisible', false);
				this.set('msgColor', 'green accent 4');
				this.get('todos').reload();
				this.transitionToRoute('users.user.todos.todo', model); 
			}).catch(() => {
				this.set('msgColor', 'red accent 4');
				this.set('msgVisible', true);
			});
		}
	}
});
