import Ember from 'ember';

export default Ember.Controller.extend({
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
