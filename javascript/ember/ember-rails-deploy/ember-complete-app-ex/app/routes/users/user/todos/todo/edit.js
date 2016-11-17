import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		edit(model, view){
			view.set('loading', true);
			model.save().then(() => {
				view.set('loading', false);
				view.get('msgs')
					.pushObject('Model was edited!');
			}).catch((errors) => {
				view.set('loading', false);
				view.get('errors')
					.pushObject(`Error savind the model : ${errors.errors.title}`);
			});
		}
	}
});
