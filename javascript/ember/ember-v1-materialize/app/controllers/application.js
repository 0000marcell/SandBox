import Ember from 'ember';

export default Ember.Controller.extend({
	flashMessages: Ember.inject.service(),
	actions: {
		stickToast(){
			console.log('click!');
			this.get('flashMessages').success('Thanks for signing up!');
			/*
			this.get('flashMessages').add({
				icon: 'flight_land',
				color: 'yellow purple-text rounded',
				sticky: true,
				message: 'This message won\'t disappear until clicked'
			});	
			*/
		}
	}
});
