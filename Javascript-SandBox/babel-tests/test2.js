import _assign from 'lodash/object/assign';
import _isArray from 'lodash/lang/isArray';
import _isEqual from 'lodash/lang/isEqual';
import _sortBy from 'lodash/collection/sortBy';

let data = [{ car: 'honda'}, { food: 'beans' }, [{ car1: 'car' }, { food1: 'food' }]];
let test = _assign({}, {car: 'honda'});
function duplicate(data) {
  if (_isArray(data)) {
    return data.map(duplicate);
  } else {
    return _assign({}, data);
  }
}
let val = duplicate(data); 
debugger;
