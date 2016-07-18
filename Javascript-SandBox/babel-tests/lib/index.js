'use strict';

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = new _base2.default();
var result = base.getModelClassFromPath('users/:id');
console.log(result);