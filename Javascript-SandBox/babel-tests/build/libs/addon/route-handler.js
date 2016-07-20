'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ember = require('ember');

var _ember2 = _interopRequireDefault(_ember);

var _assert = require('ember-cli-mirage/assert');

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

var _function = require('./route-handlers/function');

var _function2 = _interopRequireDefault(_function);

var _object = require('./route-handlers/object');

var _object2 = _interopRequireDefault(_object);

var _get = require('./route-handlers/shorthands/get');

var _get2 = _interopRequireDefault(_get);

var _post = require('./route-handlers/shorthands/post');

var _post2 = _interopRequireDefault(_post);

var _put = require('./route-handlers/shorthands/put');

var _put2 = _interopRequireDefault(_put);

var _delete = require('./route-handlers/shorthands/delete');

var _delete2 = _interopRequireDefault(_delete);

var _head = require('./route-handlers/shorthands/head');

var _head2 = _interopRequireDefault(_head);

var _keys2 = require('lodash/object/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isBlank = _ember2.default.isBlank;
var typeOf = _ember2.default.typeOf;


function isNotBlankResponse(response) {
  return response && !(typeOf(response) === 'object' && (0, _keys3.default)(response).length === 0) && ((0, _isArray3.default)(response) || !isBlank(response));
}

var DEFAULT_CODES = { get: 200, put: 204, post: 201, 'delete': 204 };

function createHandler(_ref) {
  var verb = _ref.verb;
  var schema = _ref.schema;
  var serializerOrRegistry = _ref.serializerOrRegistry;
  var path = _ref.path;
  var rawHandler = _ref.rawHandler;
  var options = _ref.options;

  var handler = void 0;
  var args = [schema, serializerOrRegistry, rawHandler, path, options];
  var type = typeOf(rawHandler);

  if (type === 'function') {
    handler = new (Function.prototype.bind.apply(_function2.default, [null].concat(args)))();
  } else if (type === 'object') {
    handler = new (Function.prototype.bind.apply(_object2.default, [null].concat(args)))();
  } else if (verb === 'get') {
    handler = new (Function.prototype.bind.apply(_get2.default, [null].concat(args)))();
  } else if (verb === 'post') {
    handler = new (Function.prototype.bind.apply(_post2.default, [null].concat(args)))();
  } else if (verb === 'put' || verb === 'patch') {
    handler = new (Function.prototype.bind.apply(_put2.default, [null].concat(args)))();
  } else if (verb === 'delete') {
    handler = new (Function.prototype.bind.apply(_delete2.default, [null].concat(args)))();
  } else if (verb === 'head') {
    handler = new (Function.prototype.bind.apply(_head2.default, [null].concat(args)))();
  }
  return handler;
}

var RouteHandler = function () {
  function RouteHandler(_ref2) {
    var schema = _ref2.schema;
    var verb = _ref2.verb;
    var rawHandler = _ref2.rawHandler;
    var customizedCode = _ref2.customizedCode;
    var options = _ref2.options;
    var path = _ref2.path;
    var serializerOrRegistry = _ref2.serializerOrRegistry;

    _classCallCheck(this, RouteHandler);

    this.verb = verb;
    this.customizedCode = customizedCode;
    this.serializerOrRegistry = serializerOrRegistry;
    this.handler = createHandler({ verb: verb, schema: schema, path: path, serializerOrRegistry: serializerOrRegistry, rawHandler: rawHandler, options: options });
  }

  _createClass(RouteHandler, [{
    key: 'handle',
    value: function handle(request) {
      var mirageResponse = this._getMirageResponseForRequest(request);
      var serializedMirageResponse = this.serialize(mirageResponse, request);

      return serializedMirageResponse.toRackResponse();
    }
  }, {
    key: '_getMirageResponseForRequest',
    value: function _getMirageResponseForRequest(request) {
      var response = void 0;
      try {
        /*
         We need to do this for the #serialize convenience method. Probably is
         a better way.
        */
        if (this.handler instanceof _function2.default) {
          this.handler.setRequest(request);
        }

        response = this.handler.handle(request);
      } catch (e) {
        if (e instanceof _assert.MirageError) {
          throw e;
        } else {
          var message = typeOf(e) === 'string' ? e : e.message;
          throw new _assert.MirageError('Your handler for the url ' + request.url + ' threw an error: ' + message);
        }
      }

      return this._toMirageResponse(response);
    }
  }, {
    key: '_toMirageResponse',
    value: function _toMirageResponse(response) {
      var mirageResponse = void 0;

      if (response instanceof _response2.default) {
        mirageResponse = response;
      } else {
        var code = this._getCodeForResponse(response);
        mirageResponse = new _response2.default(code, {}, response);
      }

      return mirageResponse;
    }
  }, {
    key: '_getCodeForResponse',
    value: function _getCodeForResponse(response) {
      var code = void 0;
      if (this.customizedCode) {
        code = this.customizedCode;
      } else {
        code = DEFAULT_CODES[this.verb];
        if (code === 204 && isNotBlankResponse(response)) {
          code = 200;
        }
      }
      return code;
    }
  }, {
    key: 'serialize',
    value: function serialize(mirageResponse, request) {
      mirageResponse.data = this.serializerOrRegistry.serialize(mirageResponse.data, request);
      return mirageResponse;
    }
  }]);

  return RouteHandler;
}();

exports.default = RouteHandler;