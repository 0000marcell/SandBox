import Ember from 'ember';

export default Ember.Controller.extend({
	msgProp: {},
	sendingMessage: false,
	actions: {
		resetPassword(){
			this.set('sendingMessage', true);
			Ember.$.ajax({
				type: "POST",
				url: "/api/v1/password_resets",
				data:	{
					user: {
						email: this.get('email'),
					}
				}
			}).done(() => {
				this.set('sendingMessage', false);
				this.set('msgProp.color', 'green accent 4');
				this.set('msgProp.msg', 'Check your email to reset your password!');
			}).fail((resp) => {
				this.set('sendingMessage', false);
				this.set('msgProp.color', 'red accent 4');
				this.set('error while trying to reset your password: '+resp);
			});
		}
	}
});
