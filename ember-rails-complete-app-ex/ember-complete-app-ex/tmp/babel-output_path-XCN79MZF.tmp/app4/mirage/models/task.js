define('app4/mirage/models/task', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Model.extend({
		user: (0, _emberCliMirage.belongsTo)()
	});
});