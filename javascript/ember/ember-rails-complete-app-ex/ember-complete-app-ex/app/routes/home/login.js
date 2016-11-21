import Ember from 'ember';

export default Ember.Route.extend({
	errors: [],
	authManager: Ember.inject.service('session'),
	actions: {
		login(email, password, view){
			view.set('logging', true);
			this.get('authManager').authenticate('authenticator:oauth2', 
																						email, 
																						password).then(() => {
				let username = this.get('authManager.data.authenticated.user.username');
				this.store.find('user', username).then((user) => {
					view.set('logging', false);
					this.transitionTo('users.user', user);
				});
			}, (errors) => {
				view.set('logging', false);
				view.get('errors').pushObject(errors.error_description);
			});
		}
	}
});
