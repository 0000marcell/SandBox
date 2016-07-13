define('app4/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		todos: _emberData['default'].hasMany('todo'),
		email: _emberData['default'].attr('string'),
		name: _emberData['default'].attr('string'),
		username: _emberData['default'].attr('string'),
		password: _emberData['default'].attr('string')
	});
});