define('app4/mirage/factories/todo', ['exports', 'ember', 'ember-cli-mirage'], function (exports, _ember, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({
		title: function title(i) {
			return 'todo ' + i;
		}
	});
});