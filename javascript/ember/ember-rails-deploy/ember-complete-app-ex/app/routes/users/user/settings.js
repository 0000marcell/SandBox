import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		edit(user, view){
			view.set('editing', true);
			user.save().then(() => {
				view.set('editing', false);
				view.get('msgs')
				.pushObject('User info edited!');
			}).catch((errors) => {
				view.set('editing', false);
				view.get('errors')
				.pushObject(errors);
			});
		}
	}
});
