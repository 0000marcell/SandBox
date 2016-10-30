import Ember from 'ember';

export default Ember.Component.extend({
	isBike: false,
	actions: {
		changeVehicle(){
			this.toggleProperty('isBike');
		}
	}
});
