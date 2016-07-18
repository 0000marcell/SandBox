const STRING_CAMELIZE_REGEXP_1 = (/(\-|\_|\.|\s)+(.)?/g);
const STRING_CAMELIZE_REGEXP_2 = (/(^|\/)([A-Z])/g);

const CAMELIZE_CACHE = new Cache(1000, function(key) {
	return key.replace(STRING_CAMELIZE_REGEXP_1, function(match, separator, chr) {
		return chr ? chr.toUpperCase() : '';
	}).replace(STRING_CAMELIZE_REGEXP_2, function(match, separator, chr) {
		return match.toLowerCase();
	});
});

function camelize(str) {
	return CAMELIZE_CACHE.get(str);
}

export { camelize };
