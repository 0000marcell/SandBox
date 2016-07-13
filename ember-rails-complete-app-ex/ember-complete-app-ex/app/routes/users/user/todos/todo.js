import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
		return this.store.find('todo', 
			param.id
		);
	},
	/*
	serialize(model){
		if(!model.get('title'))
			return;
		let title = model.get('title');
		return {
			todo_url: Ember.String.dasherize(title.toLowerCase())
		}
	}
	*/
});
