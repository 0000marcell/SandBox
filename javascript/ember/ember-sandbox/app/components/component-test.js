import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		test(){
			this.sendAction('testSendAction', 'marcell');
		},
		element(){
			let elem = this.$("button");
			console.log('elemet', elem);
		}
	}
});
