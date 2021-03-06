import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return {
			load: () => {
				return this.store.query('todo', { page: {
						number: params.page,
						size:   params.size
					},
					search: params.search
				});
			}
		}
	},	
	queryParams: {
		page: {
			refreshModel: true
		},
		size: {
			refreshModel: true
		},
		search: {
			refreshModel: true
	  }
	},
	actions: {
		delete(todo){
			console.log('delete action!');
			todo.destroyRecord();
		}
	}
});
