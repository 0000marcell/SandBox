import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';
import _isEqual from 'lodash/lang/isEqual';
import _sortBy from 'lodash/collection/sortBy';
import colors from 'colors';

let data = [{ car: 'honda'}, { food: 'beans' }];

function duplicate(data) {
	console.log(colors.green(JSON.stringify(data)));
  if (_isArray(data)) {
    return data.map(duplicate);
  } else {
    return data;
  }
}

let val = duplicate(data); 
let val2 = data;
console.log(colors.magenta(JSON.stringify(val)));
console.log(colors.magenta(val));
console.log(colors.cyan(val2));
