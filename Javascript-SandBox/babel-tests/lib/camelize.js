'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STRING_CAMELIZE_REGEXP_1 = /(\-|\_|\.|\s)+(.)?/g;
var STRING_CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;

var CAMELIZE_CACHE = new _cache2.default(1000, function (key) {
	return key.replace(STRING_CAMELIZE_REGEXP_1, function (match, separator, chr) {
		return chr ? chr.toUpperCase() : '';
	}).replace(STRING_CAMELIZE_REGEXP_2, function (match, separator, chr) {
		return match.toLowerCase();
	});
});

function camelize(str) {
	return CAMELIZE_CACHE.get(str);
}

exports.default = camelize;