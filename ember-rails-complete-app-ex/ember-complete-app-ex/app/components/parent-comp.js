import Ember from 'ember';

export default Ember.Component.extend({
	childrens: [],
	click(){
		this.get('childrens').forEach((child) => {
			console.log(child.get('value'));
		});
	},
	actions: {
		register(child){
			this.get('childrens').pushObject(child);
		}
	}
});
