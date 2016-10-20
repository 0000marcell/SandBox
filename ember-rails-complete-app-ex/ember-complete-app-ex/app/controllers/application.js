import Ember from 'ember';

export default Ember.Controller.extend({
	authManager: Ember.inject.service('session'),
	actions: {
		login(){
			this.transitionToRoute('login');
		},
		logout(){
			this.get('authManager').invalidate();
			this.transitionToRoute('login');
		},
		showUsers(){
		},
		showUser(){
		}
	}
});
