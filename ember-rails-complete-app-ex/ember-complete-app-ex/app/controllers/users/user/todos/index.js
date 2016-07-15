import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['page', 'size'],
	page: 1,
	size: 5,
	total: Ember.computed('model.meta.pagination.last.number',
		'model.meta.pagination.self.number', function(){
		let total = this.get('model.meta.pagination.last.number') || 
		this.get('model.meta.pagination.self.number');
		return total;
	}),
	loadingModel: false,
	modalIsOpen: false,	
	itemToDelete: null,
	actions: {
		delete(todo){
			this.toggleProperty('modalIsOpen');
			this.itemToDelete = todo;
		},
		agree(){
			this.itemToDelete.destroyRecord();	
			this.toggleProperty('modalIsOpen');
		},
		closeModal(){
			this.toggleProperty('modalIsOpen');
		}
	}
});
