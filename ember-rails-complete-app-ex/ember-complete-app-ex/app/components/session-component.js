import Ember from 'ember';

export default Ember.Component.extend({
	userName: "",
	actions: {
		login(){
			this.get('onLogin')();
		},
		logout(){
			this.get('onLogout')();
		},
		users(){
			this.get('onUsers')();
		},
		user(){
			this.get('onUser')();
		}
	}
});
