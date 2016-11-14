import Ember from 'ember';

export default Ember.Component.extend({
	loading: false,
	modalIsOpen: false,
	item: null,
	didReceiveAttrs(){
		this.set('loading', true);
		this.get('model').load().then((items) => {
			this.set('loading', false);
			this.set('items', items);
		});
	},
	actions: {
		delete(item){
			this.toggleProperty('modalIsOpen');
			this.item = item;	
		},
		agree(){
			this.toggleProperty('modalIsOpen');
			this.get('deleteAction')(this.item);
		},
		closeModal(){
			this.toggleProperty('modalIsOpen');
		}
	}
});
