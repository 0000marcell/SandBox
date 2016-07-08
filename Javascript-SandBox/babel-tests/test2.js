import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';
import _isEqual from 'lodash/lang/isEqual';
import _sortBy from 'lodash/collection/sortBy';

let data = [{ car: 'honda'}, { food: 'beans' }];

function duplicate(data) {
	debugger;
  if (_isArray(data)) {
    return data.map(duplicate);
  } else {
    return _assign({}, data);
  }
}
let val = duplicate(data); 
