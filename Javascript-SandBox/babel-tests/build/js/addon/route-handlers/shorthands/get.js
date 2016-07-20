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

var GetShorthandRouteHandler = function (_BaseShorthandRouteHa) {
  _inherits(GetShorthandRouteHandler, _BaseShorthandRouteHa);

  function GetShorthandRouteHandler() {
    _classCallCheck(this, GetShorthandRouteHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GetShorthandRouteHandler).apply(this, arguments));
  }

  _createClass(GetShorthandRouteHandler, [{
    key: 'handleStringShorthand',


    /*
      Retrieve a model/collection from the db.
       Examples:
        this.get('/contacts', 'contact');
        this.get('/contacts/:id', 'contact');
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
          return model;
        }
      } else if (this.options.coalesce && request.queryParams && request.queryParams.ids) {
        return modelClass.find(request.queryParams.ids);
      } else {
        return modelClass.all();
      }
    }

    /*
      Retrieve an array of collections from the db.
       Ex: this.get('/home', ['contacts', 'pictures']);
    */

  }, {
    key: 'handleArrayShorthand',
    value: function handleArrayShorthand(request, modelClasses) {
      var keys = this.shorthand;
      var id = this._getIdForRequest(request);

      /*
      If the first key is singular and we have an id param in
      the request, we're dealing with the version of the shorthand
      that has a parent model and several has-many relationships.
      We throw an error, because the serializer is the appropriate
      place for this now.
      */
      (0, _assert2.default)(!id || (0, _inflector.singularize)(keys[0]) !== keys[0], 'It looks like you\'re using the "Single record with\n      related records" version of the array shorthand, in addition to opting\n      in to the model layer. This shorthand was made when there was no\n      serializer layer. Now that you\'re using models, please ensure your\n      relationships are defined, and create a serializer for the parent\n      model, adding the relationships there.');

      return modelClasses.map(function (modelClass) {
        return modelClass.all();
      });
    }
  }]);

  return GetShorthandRouteHandler;
}(_base2.default);

exports.default = GetShorthandRouteHandler;