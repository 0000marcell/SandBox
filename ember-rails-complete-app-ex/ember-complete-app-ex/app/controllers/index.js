import Ember from 'ember';

export default Ember.Controller.extend({
	authManager: Ember.inject.service('session'),
	actions: {
		login(email, password){
			return new Ember.RSVP.Promise((resolve, reject) => {
				this.get('authManager').authenticate('authenticator:oauth2', 
																							email, 
																							password).then(() => {
					let username = this.get('authManager.data.authenticated.user.username');
					this.store.find('user', username).then((user) => {
						this.transitionToRoute('users.user', user);
					});
				}, () => {
					reject('wrong email/password combination!');
				});
			});
		},
	}
});
