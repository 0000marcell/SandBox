'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = require('ember-cli-mirage/assert');

var _assert2 = _interopRequireDefault(_assert);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _inflector = require('ember-cli-mirage/utils/inflector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jscs:disable requireParenthesesAroundArrowParam


var DeleteShorthandRouteHandler = function (_BaseShorthandRouteHa) {
  _inherits(DeleteShorthandRouteHandler, _BaseShorthandRouteHa);

  function DeleteShorthandRouteHandler() {
    _classCallCheck(this, DeleteShorthandRouteHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DeleteShorthandRouteHandler).apply(this, arguments));
  }

  _createClass(DeleteShorthandRouteHandler, [{
    key: 'handleStringShorthand',


    /*
      Remove the model from the db of type *camelizedModelName*.
       This would remove the user with id :id:
        Ex: this.del('/contacts/:id', 'user');
    */
    value: function handleStringShorthand(request, modelClass) {
      var modelName = this.shorthand;
      var camelizedModelName = (0, _inflector.camelize)(modelName);
      (0, _assert2.default)(modelClass, 'The route handler for ' + request.url + ' is trying to access the ' + camelizedModelName + ' model, but that model doesn\'t exist. Create it using \'ember g mirage-model ' + modelName + '\'.');

      var id = this._getIdForRequest(request);
      return modelClass.find(id).destroy();
    }

    /*
      Remove the model and child related models from the db.
       This would remove the contact with id `:id`, and well
      as this contact's addresses and phone numbers.
        Ex: this.del('/contacts/:id', ['contact', 'addresses', 'numbers');
    */

  }, {
    key: 'handleArrayShorthand',
    value: function handleArrayShorthand(request, modelClasses) {
      var id = this._getIdForRequest(request);

      var parent = modelClasses[0].find(id);
      var childTypes = modelClasses.slice(1).map(function (modelClass) {
        return (0, _inflector.pluralize)(modelClass.camelizedModelName);
      });

      // Delete related children
      childTypes.forEach(function (type) {
        return parent[type].destroy();
      });
      parent.destroy();
    }
  }]);

  return DeleteShorthandRouteHandler;
}(_base2.default);

exports.default = DeleteShorthandRouteHandler;