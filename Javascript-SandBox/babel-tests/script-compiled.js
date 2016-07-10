'use strict';

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isEqual2 = require('lodash/lang/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _sortBy2 = require('lodash/collection/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ car: 'honda' }, { food: 'beans' }];

function duplicate(data) {
  debugger;
  console.log(_colors2.default.green(JSON.stringify(data)));
  if ((0, _isArray3.default)(data)) {
    return data.map(duplicate);
  } else {
    return data;
  }
}
var val = duplicate(data);
var val2 = data;
console.log(_colors2.default.magenta(JSON.stringify(val)));
console.log(_colors2.default.magenta(val));
console.log(_colors2.default.cyan(val2));
