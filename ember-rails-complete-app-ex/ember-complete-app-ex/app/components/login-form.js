import Ember from 'ember';

export default Ember.Component.extend({
	msgProp: {},
	actions: {
		login(){
			let email = this.get('email');
			let password = this.get('password');
			this.set('loading', true);
			this.set('error', false);
			this.get('login')(email, password).catch((err) => {
				this.set('loading', false);
				this.set('error', err); 
			})
		}
	}

});

