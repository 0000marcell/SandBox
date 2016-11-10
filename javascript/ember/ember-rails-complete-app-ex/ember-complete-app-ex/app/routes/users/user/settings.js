import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		edit(user, view){
			view.set('editing', true);
			user.save().then(() => {
				view.set('editing', false);
				view.get('msgs')
				.pushObject('Confirmation message sent, check your email!');
			}).catch((errors) => {
				view.set('editing', false);
				view.get('errors')
				.pushObject(errors);
			});
		}
	}
});
