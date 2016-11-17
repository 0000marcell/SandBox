import Ember from 'ember';

export default Ember.Component.extend({
	item: null,
	active: null,
	isExpanded: Ember.computed('activeItem', 'item', function(){
		return this.get('activeItem') === this.get('item');
	})
});
