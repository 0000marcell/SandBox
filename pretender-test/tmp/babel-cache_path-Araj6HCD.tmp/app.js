define('app', ['exports', './server', 'jquery'], function (exports, _server, _jquery) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _server2 = _interopRequireDefault(_server);

	var _$ = _interopRequireDefault(_jquery);

	(0, _$['default'])('p').append('marcell');
	(0, _server2['default'])();
	_$['default'].get('/photos/10', function (data) {
		alert(JSON.stringify(data));
	});
});