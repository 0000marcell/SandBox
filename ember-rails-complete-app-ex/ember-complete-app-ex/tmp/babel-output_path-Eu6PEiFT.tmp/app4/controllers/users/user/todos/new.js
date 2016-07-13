define('app4/controllers/users/user/todos/new', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgVisible: false,
		msgColor: '',
		msgContent: 'Todo not saved!',
		userController: _ember['default'].inject.controller('users/user'),
		user: _ember['default'].computed.reads('userController.model'),
		authManager: _ember['default'].inject.service('session'),
		actions: {
			save: function save() {
				var _this = this;

				var model = this.get('model');
				model.set('user_id', this.get('authManager.data.authenticated.user.id'));
				model.save().then(function (model) {
					_this.set('msgVisible', false);
					_this.set('msgColor', 'green accent 4');
					_this.get('model').reload();
					_this.transitionToRoute('users.user.todos.todo', model);
				})['catch'](function () {
					_this.set('msgColor', 'red accent 4');
					_this.set('msgVisible', true);
				});
			}
		}
	});
});