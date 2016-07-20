'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isArray2 = require('lodash/lang/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _inflector = require('ember-cli-mirage/utils/inflector');

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseShorthandRouteHandler = function (_BaseRouteHandler) {
  _inherits(BaseShorthandRouteHandler, _BaseRouteHandler);

  function BaseShorthandRouteHandler(schema, serializerOrRegistry, shorthand, path) {
    var options = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

    _classCallCheck(this, BaseShorthandRouteHandler);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseShorthandRouteHandler).call(this));

    shorthand = shorthand || _this.getModelClassFromPath(path);
    _this.schema = schema;
    _this.serializerOrRegistry = serializerOrRegistry;
    _this.shorthand = shorthand;
    _this.options = options;

    var type = (0, _isArray3.default)(shorthand) ? 'array' : typeof shorthand === 'undefined' ? 'undefined' : _typeof(shorthand);
    if (type === 'string') {
      (function () {
        var modelClass = _this.schema[(0, _inflector.pluralize)((0, _inflector.camelize)((0, _inflector.singularize)(shorthand)))];
        _this.handle = function (request) {
          return _this.handleStringShorthand(request, modelClass);
        };
      })();
    } else if (type === 'array') {
      (function () {
        var modelClasses = shorthand.map(function (modelName) {
          return _this.schema[(0, _inflector.pluralize)((0, _inflector.camelize)((0, _inflector.singularize)(modelName)))];
        });
        _this.handle = function (request) {
          return _this.handleArrayShorthand(request, modelClasses);
        };
      })();
    }
    return _this;
  }

  _createClass(BaseShorthandRouteHandler, [{
    key: 'handleStringShorthand',
    value: function handleStringShorthand() {}
  }, {
    key: 'handleArrayShorthand',
    value: function handleArrayShorthand() {}
  }]);

  return BaseShorthandRouteHandler;
}(_base2.default);

exports.default = BaseShorthandRouteHandler;