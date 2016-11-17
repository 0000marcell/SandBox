import Ember from 'ember';

export default Ember.Component.extend({
	authManager: Ember.inject.service('session'),
	actions: {
		login(){
			this.get('login')();
		},
		logout(){
			this.get('logout')();
		}
	}
});
