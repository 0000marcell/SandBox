import Ember from 'ember';

export default Ember.Component.extend({
	cableService: Ember.inject.service('cable'),
	messages: [],
	body: '',
	willDestroy(){
		this.get('consumer').subscriptions
			.remove(this.get('subscription'));
	},
	setupSubscription: Ember.on('didInsertElement', function(){
		var consumer = this.get('cableService')
			.createConsumer('ws://localhost:3000/websocket');
		this.set('consumer', consumer);
		var subscription = consumer.subscriptions.create("MessagesChannel", {
			received: (data) => {
				this.get('messages').pushObject({image: data.image, 
								username: data.username, body: data.body});
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
		this.get('subscription')
			.send({ image: this.get('model.image'), username: this.get('model.name'), body: this.get('body')  });
		this.set('body', '');
	},
	actions: {
		createConsumer(){
			var consumer = this.get('cableService')
			 .createConsumer('ws://localhost:3000/websocket');
		}
	}
});
