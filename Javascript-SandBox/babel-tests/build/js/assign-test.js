'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj1 = { a: 'value1' };
var obj2 = { c: 'value3' };
console.log(_lodash2.default.assign(obj1, obj2));