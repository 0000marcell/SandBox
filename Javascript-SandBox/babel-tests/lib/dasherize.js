'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STRING_DASHERIZE_REGEXP = /[ _ ]/g;

var STRING_DASHERIZE_CACHE = new _cache2.default(1000, function (key) {
	return decamelize(key).replace(STRING_DASHERIZE_REGEXP, '-');
});

function dasherize(str) {
	return STRING_DASHERIZE_CACHE.get(str);
}

exports.default = dasherize;