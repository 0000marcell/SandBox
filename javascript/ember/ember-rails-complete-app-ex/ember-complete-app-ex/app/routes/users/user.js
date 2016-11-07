import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
		return this.store.find('user', param.user_username);
	},
	serialize(model) {
		return {
			user_username: model.get('username')
		};
	},
	actions: {
		login(){
		},
		logout(){
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
