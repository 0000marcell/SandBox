import Ember from 'ember';

export default Ember.Component.extend({
	value: 0,
  actions: {
		higher(){
			this.incrementProperty('value');
		}	
	}
});
