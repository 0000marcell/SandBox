define('app4/controllers/users/user/todos/todo/edit', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			edit: function edit() {
				var _this = this;

				this.get('model').save().then(function () {
					_this.transitionToRoute('users.user.todos');
				})['catch'](function (error) {
					console.log('error while saving todo' + error);
				});
			}
		}
	});
});