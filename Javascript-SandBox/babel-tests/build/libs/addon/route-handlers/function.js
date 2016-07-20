'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunctionRouteHandler = function (_BaseRouteHandler) {
  _inherits(FunctionRouteHandler, _BaseRouteHandler);

  function FunctionRouteHandler(schema, serializerOrRegistry, userFunction) {
    _classCallCheck(this, FunctionRouteHandler);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionRouteHandler).call(this));

    _this.schema = schema;
    _this.serializerOrRegistry = serializerOrRegistry;
    _this.userFunction = userFunction;
    return _this;
  }

  _createClass(FunctionRouteHandler, [{
    key: 'handle',
    value: function handle(request) {
      return this.userFunction(this.schema, request);
    }
  }, {
    key: 'setRequest',
    value: function setRequest(request) {
      this.request = request;
    }
  }, {
    key: 'serialize',
    value: function serialize(response, serializerType) {
      var serializer = void 0;

      if (serializerType) {
        serializer = this.serializerOrRegistry.serializerFor(serializerType, { explicit: true });
      } else {
        serializer = this.serializerOrRegistry;
      }

      return serializer.serialize(response, this.request);
    }
  }, {
    key: 'normalizedRequestAttrs',
    value: function normalizedRequestAttrs() {
      var modelName = this.getModelClassFromPath(this.request.url);

      return this._getAttrsForRequest(this.request, modelName);
    }
  }]);

  return FunctionRouteHandler;
}(_base2.default);

exports.default = FunctionRouteHandler;