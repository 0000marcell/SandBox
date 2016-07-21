import Ember from 'ember';


export default Ember.Controller.extend({
	queryParams: ['page', 'size', 'search'],
	authManager: Ember.inject.service('session'),
	page: 1,
	size: 5,
	search: '',
	total: Ember.computed('model.meta.pagination', function(){
		let total = this.get('model.meta.pagination.last.number') || 
		this.get('model.meta.pagination.self.number');
		return total;
	}),
	actions: {
		create(){
			let newItem = this.get('store').createRecord('todo');	
			return newItem;
		},
		save(model){
			if(!model.get('user_id'))
				model.set('user_id', this.get('authManager.data.authenticated.user.id'));
			return new Ember.RSVP.Promise((resolve, reject) => {
				model.save().then((model) => {
					resolve();
				}).catch(() => {
					reject();
				});
			});
		},
		delete(model){
			model.destroyRecord();
		}
	}
});
