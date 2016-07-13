define('app4/routes/users/user/todos/todo', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(param) {
			return this.store.find('todo', param.todo_id);
		}
	});
});