import Ember from 'ember';

export default Ember.Component.extend({
	value: 3,
	didReceiveAttrs(){
		this.get('register')(this);
	}
});
