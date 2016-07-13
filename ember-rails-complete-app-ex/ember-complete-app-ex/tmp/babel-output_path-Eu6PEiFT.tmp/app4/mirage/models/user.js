define('app4/mirage/models/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Model.extend({
		todos: (0, _emberCliMirage.hasMany)('todo')
	});
});