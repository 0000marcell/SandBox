import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		login(){
			this.get('login')();
		},
		logout(){
			this.get('logout')();
		}
	}
});
