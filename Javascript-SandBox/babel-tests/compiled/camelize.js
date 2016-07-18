'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var STRING_CAMELIZE_REGEXP_1 = /(\-|\_|\.|\s)+(.)?/g;
var STRING_CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;

var CAMELIZE_CACHE = new Cache(1000, function (key) {
	return key.replace(STRING_CAMELIZE_REGEXP_1, function (match, separator, chr) {
		return chr ? chr.toUpperCase() : '';
	}).replace(STRING_CAMELIZE_REGEXP_2, function (match, separator, chr) {
		return match.toLowerCase();
	});
});

function camelize(str) {
	return CAMELIZE_CACHE.get(str);
}

exports.camelize = camelize;
