import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['md-login-form'],
	init(){
		this._super(...arguments);
		this.set('errors', []);
	},
	actions: {
		login(){
			this.get('login')(this.get('email'), 
												this.get('password'), this);
		}
	}
});
