define('app4/controllers/users/user/todos/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			'delete': function _delete(todo) {
				todo.destroyRecord();
			}
		}
	});
});