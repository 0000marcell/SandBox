import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit(){
			this.get('model').save().then(() => {
			this.transitionToRoute('users.user.todos');	
			}).catch((error) => {
				console.log('error while saving todo'+error);
			});
		}
	}
});
