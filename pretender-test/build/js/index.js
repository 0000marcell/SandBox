'use strict';

var _jquery = require('./libs/jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.get('/photos/12', { success: function success(data) {
		console.log('sucess');
	} });