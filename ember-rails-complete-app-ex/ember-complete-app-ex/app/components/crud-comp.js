import Ember from 'ember';

export default Ember.Component.extend({
	msgVisible: false,
	msgColor: '',
	modalIsOpen: '',
	modalText: '',
	store: null,
	msgContent: 'Task not saved!',
	main: true,
	views: ['main', 'create'],
	selectedItem: null,
	authManager: Ember.inject.service('session'),
	showView: function(item) {
		this.set(item, true);	
		let views = this.get('views');
		views.forEach((value) => {
			if(value != item)
				this.set(value, false);	
		});
	},
	actions: {
		createItem(){
			this.showView('create');
			let newItem = this.get('store').createRecord('task');	
			this.set('selectedItem', newItem);
		},
		saveItem(){
			let model = this.get('selectedItem');
			model.set('user_id', this.get('authManager.data.authenticated.user.id'));
			model.save().then((model) => {
				this.set('msgVisible', false);
				this.set('msgColor', 'green accent 4');
				//this.get('todos').reload();
				this.showView('main');
			}).catch(() => {
				this.set('msgColor', 'red accent 4');
				this.set('msgVisible', true);
			});
		},
		editItem(item){
			this.set('selectedItem', item);	
			this.showView('update');
		},
		closeView(){
			this.showView('main');
		},
		delete(item){
			this.set('modalText', 
					`Are you sure you wanna delete ${item.get('title')} ?`);
			this.toggleProperty('modalIsOpen');	
			this.item = item;
		},
		agree(){
			this.toggleProperty('modalIsOpen');
			this.get('item').destroyRecord();
			//this.get('deleteAction')(this.item);
		},
		closeModal(){
			this.toggleProperty('modalIsOpen');
		}
	}
});
