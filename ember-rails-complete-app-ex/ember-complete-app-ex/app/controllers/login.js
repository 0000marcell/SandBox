import Ember from 'ember';

export default Ember.Controller.extend({
	msgProp: {},
	sendingMessage: false,
	authManager: Ember.inject.service('session'),
	actions: {
		login(){
			this.set('sendingMessage', true);
			this.get('authManager').authenticate('authenticator:oauth2', 
																						this.get('email'), 
																						this.get('password')).then(() => {
				let username = this.get('authManager.data.authenticated.user.username');
				this.store.find('user', username).then((user) => {
					this.set('sendingMessage', false);
					this.transitionToRoute('users.user', user);
				});
			}, () => {
				this.set('sendingMessage', false);
				this.set('msgProp.color', 'red accent 4');
				this.set('msgProp.msg', 'wrong email/password combination!');
			});
		}
	}
});
