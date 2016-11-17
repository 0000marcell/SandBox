import Ember from 'ember';
//import _ from 'lodash';

export default Ember.Component.extend({
	msgVisible: false,
	msgColor: '',
	modalIsOpen: '',
	modalText: '',
	modelToArray: Ember.computed('selectedItem', function(){
		let obj = this.get('selectedItem').toJSON(),
			  array = [];
		Object.keys(obj).forEach((key) => {
			array.push({key: key, value: obj[key]});
		});
		return array;
	}),
	arrayToModel: Ember.computed('modelToArray', function(){
		let model = this.get('selectedItem');
		this.get('modelToArray').forEach((obj) => {
			model.set(obj.key, obj.value);
		});
		return model;
	}),
	store: null,
	msgContent: '',
	main: true,
	views: ['main', 'create'],
	selectedItem: null,
	authManager: Ember.inject.service('session'),
	showView: function(item) {
		this.set(item, true);	
		let views = this.get('views');
		views.forEach((value) => {
			if(value !== item){
				this.set(value, false);	
			}
		});
	},
	actions: {
		createItem(){
			let newItem = this.get('createAction')();
			this.set('selectedItem', newItem);
			this.showView('create');
		},
		saveItem(){
			let model = this.get('arrayToModel');
			this.get('saveAction')(model).then(() => {
				this.set('msgVisible', false);
				this.set('msgColor', 'green accent 4');
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
		deleteItem(item){
			this.set('modalText', 
					`Are you sure you wanna delete ${item.get('title')} ?`);
			this.toggleProperty('modalIsOpen');	
			this.item = item;
		},
		agree(){
			this.get('deleteAction')(this.item);
			this.toggleProperty('modalIsOpen');
		},
		closeModal(){
			this.toggleProperty('modalIsOpen');
		}
	}
});
