'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _association = require('./association');

var _association2 = _interopRequireDefault(_association);

var _collection = require('../collection');

var _collection2 = _interopRequireDefault(_collection);

var _assign4 = require('lodash/object/assign');

var _assign5 = _interopRequireDefault(_assign4);

var _compact2 = require('lodash/array/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _inflector = require('ember-cli-mirage/utils/inflector');

var _assert = require('ember-cli-mirage/assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // jscs:disable requireParenthesesAroundArrowParam


var HasMany = function (_Association) {
  _inherits(HasMany, _Association);

  function HasMany() {
    _classCallCheck(this, HasMany);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HasMany).apply(this, arguments));
  }

  _createClass(HasMany, [{
    key: 'getForeignKeyArray',


    /*
      The hasMany association adds a fk to the target model of the association
    */
    value: function getForeignKeyArray() {
      return [(0, _inflector.camelize)(this.modelName), this.getForeignKey()];
    }
  }, {
    key: 'getForeignKey',
    value: function getForeignKey() {
      return (this.opts.inverse || (0, _inflector.camelize)(this.ownerModelName)) + 'Id';
    }
  }, {
    key: 'addMethodsToModelClass',
    value: function addMethodsToModelClass(ModelClass, key, schema) {
      var modelPrototype = ModelClass.prototype;
      this._model = modelPrototype;
      this._key = key;

      var association = this;
      var foreignKey = this.getForeignKey();
      var relationshipIdsKey = (0, _inflector.camelize)((0, _inflector.singularize)(association.key)) + 'Ids';
      var associationHash = _defineProperty({}, key, this);

      modelPrototype.hasManyAssociations = (0, _assign5.default)(modelPrototype.hasManyAssociations, associationHash);
      modelPrototype.associationKeys.push(key);
      modelPrototype.associationIdKeys.push(relationshipIdsKey);

      Object.defineProperty(modelPrototype, relationshipIdsKey, {

        /*
          object.childrenIds
            - returns an array of the associated children's ids
        */

        get: function get() {
          var children = association._cachedChildren || new _collection2.default(association.modelName);

          if (!this.isNew()) {
            var query = _defineProperty({}, foreignKey, this.id);
            var savedChildren = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].where(query);

            children.mergeCollection(savedChildren);
          }

          return children.models.map(function (model) {
            return model.id;
          });
        },


        /*
          object.childrenIds = ([childrenIds...])
            - sets the associated parent (via id)
        */
        set: function set(ids) {
          ids = ids || [];

          if (this.isNew()) {
            association._cachedChildren = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].find(ids);
          } else {
            // Set current children's fk to null
            var query = _defineProperty({}, foreignKey, this.id);
            schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].where(query).update(foreignKey, null);

            // Associate the new childrens to this model
            schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].find(ids).update(foreignKey, this.id);

            // Clear out any old cached children
            association._cachedChildren = new _collection2.default(association.modelName);
          }

          return this;
        }
      });

      Object.defineProperty(modelPrototype, key, {

        /*
          object.children
            - returns an array of associated children
        */

        get: function get() {
          var temporaryChildren = association._cachedChildren || new _collection2.default(association.modelName);

          if (this.isNew()) {
            return temporaryChildren;
          } else {
            var query = _defineProperty({}, foreignKey, this.id);
            var savedChildren = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].where(query);

            return savedChildren.mergeCollection(temporaryChildren);
          }
        },


        /*
          object.children = [model1, model2, ...]
            - sets the associated children (via array of models)
            - note: this method will persist unsaved chidren
              + (why? because rails does)
        */
        set: function set(models) {
          models = models ? (0, _compact3.default)(models) : [];

          if (this.isNew()) {
            association._cachedChildren = models instanceof _collection2.default ? models : new _collection2.default(association.modelName, models);
          } else {

            // Set current children's fk to null
            var query = _defineProperty({}, foreignKey, this.id);
            schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].where(query).update(foreignKey, null);

            // Save any children that are new
            models.filter(function (model) {
              return model.isNew();
            }).forEach(function (model) {
              return model.save();
            });

            // Associate the new children to this model
            schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].find(models.map(function (m) {
              return m.id;
            })).update(foreignKey, this.id);

            // Clear out any old cached children
            association._cachedChildren = new _collection2.default(association.modelName);
          }
        }
      });

      /*
        object.newChild
          - creates a new unsaved associated child
      */
      modelPrototype['new' + (0, _inflector.capitalize)((0, _inflector.camelize)((0, _inflector.singularize)(association.key)))] = function () {
        var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (!this.isNew()) {
          attrs = (0, _assign5.default)(attrs, _defineProperty({}, foreignKey, this.id));
        }

        var child = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].new(attrs);

        association._cachedChildren = association._cachedChildren || new _collection2.default(association.modelName);
        association._cachedChildren.models.push(child);

        return child;
      };

      /*
        object.createChild
          - creates an associated child, persists directly to db, and
            updates the association's foreign key
          - parent must be saved
      */
      modelPrototype['create' + (0, _inflector.capitalize)((0, _inflector.camelize)((0, _inflector.singularize)(association.key)))] = function () {
        var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        (0, _assert2.default)(!this.isNew(), 'You cannot call create unless the parent is saved');

        var augmentedAttrs = (0, _assign5.default)(attrs, _defineProperty({}, foreignKey, this.id));
        var child = schema[(0, _inflector.pluralize)((0, _inflector.camelize)(association.modelName))].create(augmentedAttrs);

        return child;
      };
    }
  }]);

  return HasMany;
}(_association2.default);

exports.default = HasMany;