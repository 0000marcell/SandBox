define("app4/controllers/password_reset", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		msgProp: {},
		actions: {
			resetPassword: function resetPassword() {
				var _this = this;

				_ember["default"].$.ajax({
					type: "POST",
					url: "/api/v1/password_resets",
					data: {
						user: {
							email: this.get('email')
						}
					}
				}).done(function () {
					_this.set('msgProp.color', 'green accent 4');
					_this.set('msgProp.msg', 'Check your email to reset your password!');
				}).fail(function (resp) {
					_this.set('msgProp.color', 'red accent 4');
					_this.set('error while trying to reset your password: ' + resp);
				});
			}
		}
	});
});