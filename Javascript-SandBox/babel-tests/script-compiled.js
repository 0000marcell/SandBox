'use strict';

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isEqual2 = require('lodash/lang/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _sortBy2 = require('lodash/collection/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = { car: 'honda' };
var result = [];
function duplicate(data) {
  debugger;
  if ((0, _isArray3.default)(data)) {
    return data.map(duplicate);
  } else {
    return (0, _assign3.default)({}, data);
  }
}
duplicate(data);
debugger;
