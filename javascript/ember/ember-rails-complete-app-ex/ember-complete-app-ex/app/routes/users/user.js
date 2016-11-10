import Ember from 'ember';

export default Ember.Route.extend({
	authManager: Ember.inject.service('session'),
	model(param){
		return this.store.find('user', param.user_username);
	},
	serialize(model) {
		return {
			user_username: model.get('username')
		};
	},
	actions: {
		logout(){
			this.get('authManager').invalidate();
			this.transitionTo('home.login');
		},
		loading(transition){
			let controller = this.controllerFor('users/user/todos/index');
			controller.set('loadingModel', true);
			transition.finally(() => {
				controller.set('loadingModel', false); 
			});
		}
	}
});
