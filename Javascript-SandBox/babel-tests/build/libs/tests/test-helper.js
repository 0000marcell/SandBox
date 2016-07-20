'use strict';

var _resolver = require('./helpers/resolver');

var _resolver2 = _interopRequireDefault(_resolver);

var _emberQunit = require('ember-qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _emberQunit.setResolver)(_resolver2.default);