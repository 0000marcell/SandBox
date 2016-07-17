'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underscore = exports.dasherize = exports.camelize = exports.capitalize = exports.pluralize = exports.singularize = undefined;

var _emberInflector = require('ember-inflector');

Object.defineProperty(exports, 'singularize', {
  enumerable: true,
  get: function get() {
    return _emberInflector.singularize;
  }
});
Object.defineProperty(exports, 'pluralize', {
  enumerable: true,
  get: function get() {
    return _emberInflector.pluralize;
  }
});

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = exports.capitalize = _ember2.default.String.capitalize;
var camelize = exports.camelize = _ember2.default.String.camelize;
var dasherize = exports.dasherize = _ember2.default.String.dasherize;
var underscore = exports.underscore = _ember2.default.String.underscore;
