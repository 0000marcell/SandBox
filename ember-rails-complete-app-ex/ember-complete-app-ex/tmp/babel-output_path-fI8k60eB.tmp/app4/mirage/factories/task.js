define('app4/mirage/factories/task', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({
		title: function title(i) {
			return 'task ' + i;
		}
	});
});