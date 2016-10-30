import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return Ember.RSVP.hash({
			todos: this.store.query('todo', { page: {
					number: params.pageTodo,
					size: params.size
				},
				search: params.searchTodo
			}), 
			tasks: this.store.query('task', { page: {
					number: params.pageTask,
					size: params.size
				},
				search: params.searchTask
			}) 
		});
	},
	queryParams: {
		pageTodo: {
			refreshModel: true
		},
		size: {
			refreshModel: true
		},
		pageTask: {
			refreshModel: true								 
		},
		searchTodo: {
			refreshModel: true								
		},
		searchTask: {
			refreshModel: true
		}
	}
});
