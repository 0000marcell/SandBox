import Ember from 'ember';

export default Ember.Route.extend({
	authManager: Ember.inject.service('session'),
	actions: {
		login(){
			this.transitionTo('login');
		},
		logout(){
			this.get('authManager').invalidate();
			this.transitionTo('index');
		}
	}
});
