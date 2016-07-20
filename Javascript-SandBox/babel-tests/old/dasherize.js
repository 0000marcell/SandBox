import Cache from './cache';

const STRING_DASHERIZE_REGEXP = (/[ _ ]/g);

const STRING_DASHERIZE_CACHE = new Cache(1000, function(key) {
	return decamelize(key).replace(STRING_DASHERIZE_REGEXP, '-');
});

function dasherize(str) {
	return STRING_DASHERIZE_CACHE.get(str);
}

export default dasherize;
