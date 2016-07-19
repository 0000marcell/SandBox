import Ember from 'ember';

export default Ember.Component.extend({
	loadingModel: false,
	modalIsOpen: false,
	item: null,
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
