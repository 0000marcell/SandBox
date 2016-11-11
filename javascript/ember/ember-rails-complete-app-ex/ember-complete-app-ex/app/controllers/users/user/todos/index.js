import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['page', 'size', 'search'],
	page: 1,
	size: 5,
	search: '',
	total: Ember.computed('model.meta.pagination', function(){
		let total = this.get('model.meta.pagination.last.number') || 
		this.get('model.meta.pagination.self.number');
		return total;
	})
});
