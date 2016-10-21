import Ember from 'ember';

export default Ember.Component.extend({
	slideIn: false,
	actions: {
		toggleSideNavBtn(){
			this.toggleProperty('slideIn');
		}
	}
});
