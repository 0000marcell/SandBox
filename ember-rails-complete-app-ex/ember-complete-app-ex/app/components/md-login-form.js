import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['md-login-form'],
	msg: false,
  logging: false,
	actions: {
		login(){
			this.get('login')(this.get('email'), 
												this.get('password'), this);
		}
	}
});
