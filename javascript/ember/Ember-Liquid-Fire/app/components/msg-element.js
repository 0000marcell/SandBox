import Ember from 'ember';

export default Ember.Component.extend({
	showLongMessage: false,
	longMessage: 'this is a long msg bla bla bla bla blathis is a long msg bla bla bla bla blathis is a long msg bla bla bla bla blathis is a long msg bla bla bla bla bla',
	shortMessage: 'this is a short',
	actions: {
		showLongMessage(){
			this.toggleProperty('showLongMessage');
		}
	}
});
