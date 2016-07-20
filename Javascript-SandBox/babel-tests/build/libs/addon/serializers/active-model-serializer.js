'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serializer = require('../serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _inflector = require('../utils/inflector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// jscs:disable requireArrayDestructuring, requireParenthesesAroundArrowParam
exports.default = _serializer2.default.extend({
  keyForModel: function keyForModel(type) {
    return (0, _inflector.underscore)(type);
  },
  keyForAttribute: function keyForAttribute(attr) {
    return (0, _inflector.underscore)(attr);
  },
  keyForRelationship: function keyForRelationship(type) {
    return (0, _inflector.pluralize)((0, _inflector.underscore)(type));
  },
  keyForRelationshipIds: function keyForRelationshipIds(type) {
    return (0, _inflector.underscore)(type) + '_ids';
  },
  normalize: function normalize(payload) {
    var type = Object.keys(payload)[0];
    var attrs = payload[type];

    var jsonApiPayload = {
      data: {
        type: (0, _inflector.pluralize)(type),
        attributes: {}
      }
    };
    if (attrs.id) {
      jsonApiPayload.data.id = attrs.id;
    }
    Object.keys(attrs).forEach(function (key) {
      if (key !== 'id') {
        jsonApiPayload.data.attributes[(0, _inflector.dasherize)(key)] = attrs[key];
      }
    });

    return jsonApiPayload;
  }
});