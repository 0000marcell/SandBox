import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('task');
	},
	actions: {
		new(task){
			task.save().then(() => {
				console.log('task saved');
				this.transitionTo('tasks');
			}).catch(() => {
				console.log('error!');
			});
		}
	}
});
