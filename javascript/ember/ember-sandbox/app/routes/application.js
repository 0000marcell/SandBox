import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		let array = [];
		['value1', 'value2', 'value3'].forEach((value, index) => {
			array.push({id: index, name: value});
		});
		return array;
	},
});
