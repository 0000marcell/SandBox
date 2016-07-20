'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys2 = require('lodash/object/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isFunction2 = require('lodash/lang/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _mapValues2 = require('lodash/object/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _referenceSort = require('./utils/reference-sort');

var _referenceSort2 = _interopRequireDefault(_referenceSort);

var _isPlainObject2 = require('lodash/lang/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Factory = function Factory() {
  this.build = function (sequence) {
    var object = {};
    var topLevelAttrs = (0, _assign3.default)({}, this.attrs);
    delete topLevelAttrs.afterCreate;
    var keys = sortAttrs(topLevelAttrs, sequence);

    keys.forEach(function (key) {
      var buildAttrs = void 0;
      var _buildSingleValue = void 0;

      buildAttrs = function buildAttrs(attrs) {
        return (0, _mapValues3.default)(attrs, _buildSingleValue);
      };

      _buildSingleValue = function buildSingleValue(value) {
        if ((0, _isArray3.default)(value)) {
          return value.map(_buildSingleValue);
        } else if ((0, _isPlainObject3.default)(value)) {
          return buildAttrs(value);
        } else if ((0, _isFunction3.default)(value)) {
          return value.call(topLevelAttrs, sequence);
        } else {
          return value;
        }
      };

      var value = topLevelAttrs[key];
      if ((0, _isFunction3.default)(value)) {
        object[key] = value.call(object, sequence);
      } else {
        object[key] = _buildSingleValue(value);
      }
    });

    return object;
  };
};

Factory.extend = function (attrs) {
  // Merge the new attributes with existing ones. If conflict, new ones win.
  var newAttrs = (0, _assign3.default)({}, this.attrs, attrs);

  var Subclass = function Subclass() {
    this.attrs = newAttrs;
    Factory.call(this);
  };

  // Copy extend
  Subclass.extend = Factory.extend;

  // Store a reference on the class for future subclasses
  Subclass.attrs = newAttrs;

  return Subclass;
};

function sortAttrs(attrs, sequence) {
  var Temp = function Temp() {};
  var obj = new Temp();
  var refs = [];
  var property = void 0;

  (0, _keys3.default)(attrs).forEach(function (key) {
    Object.defineProperty(obj.constructor.prototype, key, {
      get: function get() {
        refs.push([property, key]);
      },

      enumerable: false,
      configurable: true
    });
  });

  (0, _keys3.default)(attrs).forEach(function (key) {
    var value = attrs[key];
    property = key;

    if (typeof value === 'function') {
      value.call(obj, sequence);
    }

    refs.push([key]);
  });

  return (0, _referenceSort2.default)(refs);
}

exports.default = Factory;