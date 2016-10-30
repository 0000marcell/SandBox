import Ember from 'ember';

export default Ember.Component.extend({
	hours: 0,
	minutes: 0,
	seconds: 0,
	actions: {
		change(){
			this.incrementProperty('seconds');
		}
	}
});
