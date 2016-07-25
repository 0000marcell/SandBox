'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = { title: 'todo', name: 'marcell', user: '1' };
var array = [];
Object.keys(obj).forEach(function (key) {
	array.push({ key: key, value: obj[key] });
});
console.log('result', array);

var finalValue = array.reduce(function (result, obj) {
	console.log(result);
	return _lodash2.default.assign(result, _defineProperty({}, obj['key'], obj['value']));
}, {});