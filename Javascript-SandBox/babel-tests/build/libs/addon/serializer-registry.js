'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // jscs:disable requireParenthesesAroundArrowParam


var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _collection = require('ember-cli-mirage/orm/collection');

var _collection2 = _interopRequireDefault(_collection);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _inflector = require('./utils/inflector');

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SerializerRegistry = function () {
  function SerializerRegistry(schema) {
    var serializerMap = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, SerializerRegistry);

    this.schema = schema;
    this._serializerMap = serializerMap;
  }

  _createClass(SerializerRegistry, [{
    key: 'normalize',
    value: function normalize(payload, modelName) {
      return this.serializerFor(modelName).normalize(payload);
    }
  }, {
    key: 'serialize',
    value: function serialize(response, request) {
      var _this = this;

      if (this._isModelOrCollection(response)) {
        var serializer = this.serializerFor(response.modelName);

        return serializer.serialize(response, request);
      } else if ((0, _isArray3.default)(response) && response.filter(this._isCollection).length) {
        return response.reduce(function (json, collection) {
          var serializer = _this.serializerFor(collection.modelName);

          if (serializer.embed) {
            json[(0, _inflector.pluralize)(collection.modelName)] = serializer._serializeModelOrCollection(collection, request);
          } else {
            json = (0, _assign3.default)(json, serializer._serializeSideloadedModelOrCollection(collection, request));
          }

          return json;
        }, {});
      } else {
        return response;
      }
    }
  }, {
    key: 'serializerFor',
    value: function serializerFor(type) {
      var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref$explicit = _ref.explicit;
      var explicit = _ref$explicit === undefined ? false : _ref$explicit;
      var _ref$included = _ref.included;
      var included = _ref$included === undefined ? [] : _ref$included;
      var _ref$alreadySerialize = _ref.alreadySerialized;
      var alreadySerialized = _ref$alreadySerialize === undefined ? {} : _ref$alreadySerialize;

      var SerializerForResponse = this._serializerMap && this._serializerMap[(0, _inflector.camelize)(type)];

      if (explicit) {
        (0, _assert2.default)(!!SerializerForResponse, 'You passed in ' + type + ' as an explicit serializer type but that serializer doesn\'t exist. Try running `ember g mirage-serializer ' + type + '`.');
      } else {
        SerializerForResponse = SerializerForResponse || this._serializerMap.application || _serializer2.default;

        (0, _assert2.default)(!SerializerForResponse || SerializerForResponse.prototype.embed || SerializerForResponse.prototype.root || new SerializerForResponse() instanceof _jsonApiSerializer2.default, 'You cannot have a serializer that sideloads (embed: false) and disables the root (root: false).');
      }

      return new SerializerForResponse(this, type, included, alreadySerialized);
    }
  }, {
    key: '_isModel',
    value: function _isModel(object) {
      return object instanceof _model2.default;
    }
  }, {
    key: '_isCollection',
    value: function _isCollection(object) {
      return object instanceof _collection2.default;
    }
  }, {
    key: '_isModelOrCollection',
    value: function _isModelOrCollection(object) {
      return this._isModel(object) || this._isCollection(object);
    }
  }]);

  return SerializerRegistry;
}();

exports.default = SerializerRegistry;