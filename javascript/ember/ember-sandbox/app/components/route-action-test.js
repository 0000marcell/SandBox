import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		componentAction(){
			this.get('clicked')();	
		}
	}
});
