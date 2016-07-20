'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _model = require('ember-cli-mirage/orm/model');

var _model2 = _interopRequireDefault(_model);

var _schema = require('ember-cli-mirage/orm/schema');

var _schema2 = _interopRequireDefault(_schema);

var _db = require('ember-cli-mirage/db');

var _db2 = _interopRequireDefault(_db);

var _emberCliMirage = require('ember-cli-mirage');

var _inflector = require('ember-cli-mirage/utils/inflector');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  A model with a hasMany association can be in eight states
  with respect to its association. This helper class
  returns a parent (and its children) in these various states.

  The return value is an array of the form

    [parent, [child1, child2...]]

  where the children array may be undefined.
*/

var HasManyHelper = function () {
  function HasManyHelper(opts) {
    var _ref;

    _classCallCheck(this, HasManyHelper);

    var _$defaults = _lodash2.default.defaults({}, opts, {
      ownKey: 'homeAddresses',
      ownModel: 'user',
      otherKey: 'user',
      otherModel: 'homeAddress'
    });

    var ownKey = _$defaults.ownKey;
    var ownModel = _$defaults.ownModel;
    var otherKey = _$defaults.otherKey;
    var otherModel = _$defaults.otherModel;


    this.ownKey = ownKey;
    this.ownModel = ownModel;
    this.otherKey = otherKey;
    this.otherModel = otherModel;
    this.db = new _db2.default();

    var hasManyArgs = [];
    if ((0, _inflector.pluralize)(otherModel) !== ownKey) {
      hasManyArgs.push(otherModel);
    }
    if (ownModel !== otherKey) {
      hasManyArgs.push({ inverse: otherKey });
    }

    this.schema = new _schema2.default(this.db, (_ref = {}, _defineProperty(_ref, ownModel, _model2.default.extend(_defineProperty({}, ownKey, _emberCliMirage.hasMany.apply(undefined, hasManyArgs)))), _defineProperty(_ref, otherModel, _model2.default), _ref));
  }

  _createClass(HasManyHelper, [{
    key: 'savedParentNoChildren',
    value: function savedParentNoChildren() {
      var insertedUser = this.db[(0, _inflector.pluralize)(this.ownModel)].insert({ name: 'Link' });

      return [this.schema[(0, _inflector.pluralize)(this.ownModel)].find(insertedUser.id), []];
    }
  }, {
    key: 'savedParentNewChildren',
    value: function savedParentNewChildren() {
      var insertedUser = this.db[(0, _inflector.pluralize)(this.ownModel)].insert({ name: 'Link' });

      var user = this.schema[(0, _inflector.pluralize)(this.ownModel)].find(insertedUser.id);
      var newHomeAddress = user['new' + (0, _inflector.singularize)((0, _inflector.capitalize)(this.ownKey))]();

      return [user, [newHomeAddress]];
    }
  }, {
    key: 'savedParentSavedChildren',
    value: function savedParentSavedChildren() {
      var insertedUser = this.db[(0, _inflector.pluralize)(this.ownModel)].insert({ name: 'Link' });
      var insertedHomeAddress = this.db[(0, _inflector.pluralize)(this.otherModel)].insert(_defineProperty({ name: '123 Hyrule Way' }, (0, _inflector.camelize)(this.otherKey) + 'Id', insertedUser.id));

      var user = this.schema[(0, _inflector.pluralize)(this.ownModel)].find(insertedUser.id);
      var homeAddress = this.schema[(0, _inflector.pluralize)(this.otherModel)].find(insertedHomeAddress.id);

      return [user, [homeAddress]];
    }
  }, {
    key: 'savedParentMixedChildren',
    value: function savedParentMixedChildren() {
      var insertedUser = this.db[(0, _inflector.pluralize)(this.ownModel)].insert({ name: 'Link' });
      var insertedHomeAddress = this.db[(0, _inflector.pluralize)(this.otherModel)].insert(_defineProperty({ name: '123 Hyrule Way' }, (0, _inflector.camelize)(this.otherKey) + 'Id', insertedUser.id));

      var user = this.schema[(0, _inflector.pluralize)(this.ownModel)].find(insertedUser.id);
      var savedHomeAddress = this.schema[(0, _inflector.pluralize)(this.otherModel)].find(insertedHomeAddress.id);
      var newHomeAddress = user['new' + (0, _inflector.singularize)((0, _inflector.capitalize)(this.ownKey))]();

      return [user, [savedHomeAddress, newHomeAddress]];
    }
  }, {
    key: 'newParentNoChildren',
    value: function newParentNoChildren() {
      var user = this.schema[(0, _inflector.pluralize)(this.ownModel)].new();

      return [user, []];
    }
  }, {
    key: 'newParentNewChildren',
    value: function newParentNewChildren() {
      var user = this.schema[(0, _inflector.pluralize)(this.ownModel)].new();
      var newHomeAddress = user['new' + (0, _inflector.singularize)((0, _inflector.capitalize)(this.ownKey))]();

      return [user, [newHomeAddress]];
    }
  }, {
    key: 'newParentSavedChildren',
    value: function newParentSavedChildren() {
      var insertedHomeAddress = this.db[(0, _inflector.pluralize)(this.otherModel)].insert({ name: '123 Hyrule Way' });
      var savedHomeAddress = this.schema[(0, _inflector.pluralize)(this.otherModel)].find(insertedHomeAddress.id);
      var newUser = this.schema[(0, _inflector.pluralize)(this.ownModel)].new(_defineProperty({}, this.ownKey, [savedHomeAddress]));

      return [newUser, [savedHomeAddress]];
    }
  }, {
    key: 'newParentMixedChildren',
    value: function newParentMixedChildren() {
      var insertedHomeAddress = this.db[(0, _inflector.pluralize)(this.otherModel)].insert({ name: '123 Hyrule Way' });
      var savedHomeAddress = this.schema[(0, _inflector.pluralize)(this.otherModel)].find(insertedHomeAddress.id);
      var newHomeAddress = this.schema[(0, _inflector.pluralize)(this.otherModel)].new();

      var newUser = this.schema[(0, _inflector.pluralize)(this.ownModel)].new(_defineProperty({}, this.ownKey, [savedHomeAddress, newHomeAddress]));

      return [newUser, [savedHomeAddress, newHomeAddress]];
    }

    // Just a saved unassociated child. The id is high so as not to
    // interfere with any other children

  }, {
    key: 'savedChild',
    value: function savedChild() {
      var insertedHomeAddress = this.db[(0, _inflector.pluralize)(this.otherModel)].insert({ name: 'foo' });

      return this.schema[(0, _inflector.pluralize)(this.otherModel)].find(insertedHomeAddress.id);
    }
  }, {
    key: 'newChild',
    value: function newChild() {
      return this.schema[(0, _inflector.pluralize)(this.otherModel)].new({ name: 'Newbie' });
    }
  }]);

  return HasManyHelper;
}();

HasManyHelper.forEachScenario = function (fn) {
  [[true, true], [true, false], [false, true], [false, false]].forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2);

    var useDefaultOwnKey = _ref3[0];
    var useDefaultOtherKey = _ref3[1];


    var accessor = 'homeAddresses';
    var idsAccessor = 'homeAddressIds';
    var createAccessor = 'createHomeAddress';
    var newAccessor = 'newHomeAddress';
    var otherAccessor = 'user';
    var otherIdAccessor = 'userId';

    var opts = {};
    if (!useDefaultOwnKey) {
      opts.ownKey = 'altHomeAddresses';
      accessor = 'altHomeAddresses';
      idsAccessor = 'altHomeAddressIds';
      createAccessor = 'createAltHomeAddress';
      newAccessor = 'newAltHomeAddress';
    }
    if (!useDefaultOtherKey) {
      opts.otherKey = 'altUser';
      otherAccessor = 'altUser';
      otherIdAccessor = 'altUserId';
    }

    ['savedParentNoChildren', 'savedParentNewChildren', 'savedParentSavedChildren', 'savedParentMixedChildren', 'newParentNoChildren', 'newParentNewChildren', 'newParentSavedChildren', 'newParentMixedChildren'].forEach(function (state) {
      var title = state + ' with ' + (useDefaultOwnKey ? 'default' : 'non-default') + ' own key and ' + (useDefaultOtherKey ? 'default' : 'non-default') + ' other key';
      fn({
        go: function go() {
          var helper = new HasManyHelper(opts);

          var _helper$state = helper[state]();

          var _helper$state2 = _slicedToArray(_helper$state, 2);

          var parent = _helper$state2[0];
          var children = _helper$state2[1];

          return {
            parent: parent,
            children: children,
            title: title,
            accessor: accessor,
            idsAccessor: idsAccessor,
            createAccessor: createAccessor,
            newAccessor: newAccessor,
            otherAccessor: otherAccessor,
            otherIdAccessor: otherIdAccessor,
            helper: helper
          };
        },

        title: title,
        state: state,
        useDefaultOwnKey: useDefaultOwnKey,
        useDefaultOtherKey: useDefaultOtherKey
      });
    });
  });
};

exports.default = HasManyHelper;