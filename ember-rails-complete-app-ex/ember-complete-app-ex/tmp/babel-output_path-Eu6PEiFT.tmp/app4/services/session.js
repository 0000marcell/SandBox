define("app4/services/session", ["exports", "ember", "ember-simple-auth/services/session"], function (exports, _ember, _emberSimpleAuthServicesSession) {
	exports["default"] = _emberSimpleAuthServicesSession["default"].extend({
		store: _ember["default"].inject.service()
	});
});