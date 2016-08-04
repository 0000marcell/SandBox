define('one', ['exports', 'module'], function (exports, module) {
	'use strict';

	module.exports = function () {
		alert('one');
	};
});

define('test2/two', ['exports', 'module'], function (exports, module) {
	'use strict';

	module.exports = function () {
		alert('two');
	};
});

define('two', ['exports', 'module'], function (exports, module) {
	'use strict';

	module.exports = function () {
		alert('two');
	};
});
