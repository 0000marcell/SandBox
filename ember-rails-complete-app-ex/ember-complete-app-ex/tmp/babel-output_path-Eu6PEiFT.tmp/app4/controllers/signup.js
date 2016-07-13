define('app4/controllers/signup', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgProp: {},
		actions: {
			signup: function signup() {
				var _this = this;

				var user = this.get('model');
				user.save().then(function () {
					_this.set('msgProp.color', 'green accent 4');
					_this.set('msgProp.msg', 'Confirmation message sent, check your email!');
				})['catch'](function (resp) {
					_this.set('msgProp.color', 'red accent 4');
					_this.set('msgProp.msg', 'error: ' + resp);
				});
			}
		}
	});
});