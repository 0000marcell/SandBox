import Ember from 'ember';

export default Ember.Controller.extend({
	msgProp: {},
	sendingMessage: false,
	actions: {
		signup(){
			this.set('sendingMessage', true);
			var user = this.get('model');
			console.log('user: ', user);
			user.save().then(() => {
				this.set('sendingMessage', false);
				this.set('msgProp.color', 'green accent 4');
				this.set('msgProp.msg', 'Confirmation message sent, check your email!');
			}).catch((resp) => {
				this.set('sendingMessage', false);
				this.set('msgProp.color', 'red accent 4');
				this.set('msgProp.msg', 'error: '+resp);
			});
		}
	}
});
