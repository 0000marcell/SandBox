import Ember from 'ember';

export default Ember.Component.extend({
	cableService: Ember.inject.service('cable'),
	messages: [],
	username: 'guest',
	body: '',
	setupSubscription: Ember.on('init', function(){
		var consumer = this.get('cableService')
			.createConsumer('ws://localhost:3000/websocket');
		var subscription = consumer.subscriptions.create("MessagesChannel", {
			received: (data) => {
				console.log(data);
				this.get('messages').pushObject({username: data.username, body: data.body});
			}
		});
		this.set('subscription', subscription);
	}),
	keyPress(e){
		if(e.keyCode === 13){
			this.sendMessage();
			return false;
		}
	},
	sendMessage() {
		console.log('gonna send: ', this.get('body'));
		this.get('subscription')
			.send({ username: this.get('username'), body: this.get('body')  });
		this.set('body', '');
	}
});
