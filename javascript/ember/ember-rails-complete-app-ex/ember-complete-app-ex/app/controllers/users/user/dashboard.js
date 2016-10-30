import Ember from 'ember';

export default Ember.Controller.extend({
	pageTodo: 1,
	pageTask: 1,
	size: 5,
	searchTodo: '',
	searchTask: '',
	totalTodos: Ember.computed('model.todos.meta.pagination', function(){
		let total = this.get('model.todos.meta.pagination.last.number') || 
		this.get('model.todos.meta.pagination.self.number');
		return total;
	}),
	totalTasks: Ember.computed('model.tasks.meta.pagination', function(){
		let total = this.get('model.tasks.meta.pagination.last.number') || 
		this.get('model.tasks.meta.pagination.self.number');
		return total;
	}),
	actions: {
		deleteTodos(){
		},
		deleteTasks(){
		}
	}
});
