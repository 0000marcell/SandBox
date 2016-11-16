import Ember from 'ember';

export default Ember.Component.extend({
	loading: false,
	errors: [],
	msgs: [],
	actions: {
		save(){
			this.get('submit')(this.get('model'), this);	
		}
	}
});
