import Ember from 'ember';

export default Ember.Component.extend({
	msgProp: {},
	sendingMessage: false,
	actions: {
		login(){
			this.get('onLogin')();
		}
	}

});

