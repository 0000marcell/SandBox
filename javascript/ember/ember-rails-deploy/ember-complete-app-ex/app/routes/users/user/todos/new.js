import Ember from 'ember';

export default Ember.Route.extend({
	authManager: Ember.inject.service('session'),
	model(){
		return this.store.createRecord('todo');
	},
	actions: {
		new(model, view){
			view.set('loading', true);
			model.set('user_id', this.get('authManager.data.authenticated.user.id'));
			model.save().then(() => {
				view.set('loading', false);
				view.get('msgs')
					.pushObject('Model was saved!');
			}).catch((errors) => {
				view.set('loading', false);
				view.get('errors')
					.pushObject(`Error savind the model : ${errors.errors.title}`);
			});
		}
	}
});
