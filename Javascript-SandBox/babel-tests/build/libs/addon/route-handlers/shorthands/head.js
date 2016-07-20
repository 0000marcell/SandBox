'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = require('ember-cli-mirage/assert');

var _assert2 = _interopRequireDefault(_assert);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _emberCliMirage = require('ember-cli-mirage');

var _inflector = require('ember-cli-mirage/utils/inflector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadShorthandRouteHandler = function (_BaseShorthandRouteHa) {
  _inherits(HeadShorthandRouteHandler, _BaseShorthandRouteHa);

  function HeadShorthandRouteHandler() {
    _classCallCheck(this, HeadShorthandRouteHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeadShorthandRouteHandler).apply(this, arguments));
  }

  _createClass(HeadShorthandRouteHandler, [{
    key: 'handleStringShorthand',


    /*
      Retrieve a model/collection from the db.
       Examples:
        this.head('/contacts', 'contact');
        this.head('/contacts/:id', 'contact');
    */
    value: function handleStringShorthand(request, modelClass) {
      var modelName = this.shorthand;
      var camelizedModelName = (0, _inflector.camelize)(modelName);

      (0, _assert2.default)(modelClass, 'The route handler for ' + request.url + ' is trying to access the ' + camelizedModelName + ' model, but that model doesn\'t exist. Create it using \'ember g mirage-model ' + modelName + '\'.');

      var id = this._getIdForRequest(request);
      if (id) {
        var model = modelClass.find(id);
        if (!model) {
          return new _emberCliMirage.Response(404);
        } else {
          return new _emberCliMirage.Response(204);
        }
      } else if (this.options.coalesce && request.queryParams && request.queryParams.ids) {
        var _model = modelClass.find(request.queryParams.ids);

        if (!_model) {
          return new _emberCliMirage.Response(404);
        } else {
          return new _emberCliMirage.Response(204);
        }
      } else {
        return new _emberCliMirage.Response(204);
      }
    }
  }]);

  return HeadShorthandRouteHandler;
}(_base2.default);

exports.default = HeadShorthandRouteHandler;