'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _association = require('./association');

var _association2 = _interopRequireDefault(_association);

var _assign2 = require('lodash/object/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _inflector = require('ember-cli-mirage/utils/inflector');

var _assert = require('ember-cli-mirage/assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BelongsTo = function (_Association) {
  _inherits(BelongsTo, _Association);

  function BelongsTo() {
    _classCallCheck(this, BelongsTo);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BelongsTo).apply(this, arguments));
  }

  _createClass(BelongsTo, [{
    key: 'getForeignKeyArray',


    /*
      The belongsTo association adds a fk to the owner of the association
    */
    value: function getForeignKeyArray() {
      return [(0, _inflector.camelize)(this.ownerModelName), (0, _inflector.camelize)(this.key) + 'Id'];
    }
  }, {
    key: 'getForeignKey',
    value: function getForeignKey() {
      return (0, _inflector.camelize)(this.key) + 'Id';
    }
  }, {
    key: 'addMethodsToModelClass',
    value: function addMethodsToModelClass(ModelClass, key, schema) {
      var modelPrototype = ModelClass.prototype;
      var association = this;
      var foreignKey = this.getForeignKey();

      var associationHash = {};
      associationHash[key] = this;
      modelPrototype.belongsToAssociations = (0, _assign3.default)(modelPrototype.belongsToAssociations, associationHash);
      modelPrototype.associationKeys.push(key);
      modelPrototype.associationIdKeys.push(foreignKey);

      Object.defineProperty(modelPrototype, this.getForeignKey(), {

        /*
          object.parentId
            - returns the associated parent's id
        */

        get: function get() {
          return this.attrs[foreignKey];
        },


        /*
          object.parentId = (parentId)
            - sets the associated parent (via id)
        */
        set: function set(id) {
          (0, _assert2.default)(!id || schema.db[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].find(id), 'Couldn\'t find ' + association.modelName + ' with id = ' + id);

          this.attrs[foreignKey] = id;
          return this;
        }
      });

      Object.defineProperty(modelPrototype, key, {
        /*
          object.parent
            - returns the associated parent
        */

        get: function get() {
          var foreignKeyId = this[foreignKey];
          if (foreignKeyId != null) {
            association._tempParent = null;
            return schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].find(foreignKeyId);
          } else if (association._tempParent) {
            return association._tempParent;
          } else {
            return null;
          }
        },


        /*
          object.parent = (parentModel)
            - sets the associated parent (via model)
        */
        set: function set(newModel) {
          if (newModel && newModel.isNew()) {
            this[foreignKey] = null;
            association._tempParent = newModel;
          } else if (newModel) {
            association._tempParent = null;
            this[foreignKey] = newModel.id;
          } else {
            association._tempParent = null;
            this[foreignKey] = null;
          }
        }
      });

      /*
        object.newParent
          - creates a new unsaved associated parent
      */
      modelPrototype['new' + (0, _inflector.capitalize)(key)] = function (attrs) {
        var parent = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].new(attrs);

        this[key] = parent;

        return parent;
      };

      /*
        object.createParent
          - creates an associated parent, persists directly to db,
            and updates the owner's foreign key
      */
      modelPrototype['create' + (0, _inflector.capitalize)(key)] = function (attrs) {
        var parent = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].create(attrs);

        this[foreignKey] = parent.id;

        return parent;
      };
    }
  }]);

  return BelongsTo;
}(_association2.default);

exports.default = BelongsTo;