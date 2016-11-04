import Ember from 'ember';

export default Ember.Component.extend({
	errors: [],
	classNames: ['md-login-form'],
	actions: {
		login(){
			this.get('login')(this.get('email'), 
												this.get('password'), this);
		}
	}
});
