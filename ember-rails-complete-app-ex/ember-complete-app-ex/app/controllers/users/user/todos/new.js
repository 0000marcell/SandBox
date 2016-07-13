import Ember from 'ember';

export default Ember.Controller.extend({
	msgVisible: false,
	msgColor:		'',
	msgContent: 'Todo not saved!',
	userController: Ember.inject.controller('users/user'),
	user: Ember.computed.reads('userController.model'),
	authManager: Ember.inject.service('session'),
	actions: {
		save(){
			let model = this.get('model');
			let title = model.get('title');
			model.set('user_id', this.get('authManager.data.authenticated.user.id'));
			model.set('slug', 
				Ember.String.dasherize(title.toLowerCase()));
			model.save().then((model) => {
				this.set('msgVisible', false);
				this.set('msgColor', 'green accent 4');
				this.get('model').reload();
				this.transitionToRoute('users.user.todos.todo', model); 
			}).catch(() => {
				this.set('msgColor', 'red accent 4');
				this.set('msgVisible', true);
			});
		}
	}
});
