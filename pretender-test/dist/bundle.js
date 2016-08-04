define('doit', ['exports', 'module'], function (exports, module) {
	'use strict';

	var math = require('math');

	module.exports = function () {
		math();
	};
});
define('math', ['exports', 'module'], function (exports, module) {
	'use strict';

	module.exports = function () {
		alert('math');
	};
});