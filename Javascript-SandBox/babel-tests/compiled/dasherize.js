'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var STRING_DASHERIZE_REGEXP = /[ _ ]/g;

var STRING_DASHERIZE_CACHE = new Cache(1000, function (key) {
	return decamelize(key).replace(STRING_DASHERIZE_REGEXP, '-');
});

function dasherize(str) {
	return STRING_DASHERIZE_CACHE.get(str);
}

exports.default = dasherize;
